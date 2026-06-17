/**
 * Image Web Worker
 * Handles image fetching, decoding, resizing, and transcoding using OffscreenCanvas
 * Uses CacheStorage for optimized image caching
 */

const CACHE_NAME = 'uiverse-image-cache';
const MAX_CACHE_SIZE = 100;
const QUALITY = 0.85;
const SUPPORTED_FORMATS = ['webp', 'avif', 'jpeg', 'png'];

/**
 * Generate a unique cache key for an image with specific dimensions and format
 */
function generateCacheKey(url, width, height, format) {
  return `img-${btoa(url).replace(/[^a-zA-Z0-9]/g, '')}-${width}x${height}-${format}`;
}

/**
 * Open or create the image cache
 */
async function openImageCache() {
  return await caches.open(CACHE_NAME);
}

/**
 * Check if an optimized version exists in cache
 */
async function getCachedImage(cacheKey) {
  try {
    const cache = await openImageCache();
    const cachedResponse = await cache.match(cacheKey);
    if (cachedResponse) {
      const blob = await cachedResponse.blob();
      return { blob, fromCache: true };
    }
  } catch (error) {
    console.warn('[ImageWorker] Cache read error:', error);
  }
  return { blob: null, fromCache: false };
}

/**
 * Store an optimized image in cache
 */
async function cacheOptimizedImage(cacheKey, blob) {
  try {
    const cache = await openImageCache();
    
    // Enforce cache size limit
    const keys = await cache.keys();
    if (keys.length >= MAX_CACHE_SIZE) {
      await cache.delete(keys[0].url);
    }
    
    const response = new Response(blob, {
      headers: {
        'Content-Type': blob.type || 'image/webp',
        'Content-Length': blob.size.toString(),
        'X-Image-Cache': 'true'
      }
    });
    
    await cache.put(cacheKey, response);
    return true;
  } catch (error) {
    console.warn('[ImageWorker] Cache write error:', error);
    return false;
  }
}

/**
 * Fetch image as blob
 */
async function fetchImageAsBlob(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }
  return await response.blob();
}

/**
 * Decode image blob to ImageBitmap
 */
async function decodeImage(blob) {
  return await createImageBitmap(blob);
}

/**
 * Resize and transcode image using OffscreenCanvas
 */
async function processImage(bitmap, targetWidth, targetHeight, format) {
  const canvas = new OffscreenCanvas(targetWidth, targetHeight);
  const ctx = canvas.getContext('2d');
  
  // Disable image smoothing for better quality at reduced sizes
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  
  // Draw the bitmap scaled to target dimensions
  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);
  
  // Determine output mime type
  let mimeType = 'image/webp';
  if (format === 'avif' && typeof canvas.convertToBlob === 'function') {
    mimeType = 'image/avif';
  } else if (format === 'jpeg' || format === 'jpg') {
    mimeType = 'image/jpeg';
  } else if (format === 'png') {
    mimeType = 'image/png';
  }
  
  // Convert canvas to blob
  const blob = await canvas.convertToBlob({
    type: mimeType,
    quality: QUALITY
  });
  
  return blob;
}

/**
 * Calculate optimal dimensions maintaining aspect ratio
 */
function calculateDimensions(originalWidth, originalHeight, maxWidth, maxHeight) {
  let width = originalWidth;
  let height = originalHeight;
  
  // Scale down if needed
  if (maxWidth && width > maxWidth) {
    height = Math.round((height * maxWidth) / width);
    width = maxWidth;
  }
  
  if (maxHeight && height > maxHeight) {
    width = Math.round((width * maxHeight) / height);
    height = maxHeight;
  }
  
  // Ensure minimum dimensions
  width = Math.max(1, width);
  height = Math.max(1, height);
  
  return { width, height };
}

/**
 * Main message handler
 */
self.onmessage = async function(event) {
  const { id, type, payload } = event.data;
  
  try {
    switch (type) {
      case 'OPTIMIZE_IMAGE': {
        const { url, maxWidth, maxHeight, format = 'webp' } = payload;
        
        // Check cache first
        const { width: targetWidth, height: targetHeight } = calculateDimensions(
          payload.originalWidth || maxWidth || 800,
          payload.originalHeight || maxHeight || 600,
          maxWidth,
          maxHeight
        );
        
        const cacheKey = generateCacheKey(url, targetWidth, targetHeight, format);
        const cached = await getCachedImage(cacheKey);
        
        if (cached.fromCache && cached.blob) {
          self.postMessage({
            id,
            type: 'OPTIMIZE_RESULT',
            payload: {
              success: true,
              blob: cached.blob,
              fromCache: true,
              cacheKey,
              width: targetWidth,
              height: targetHeight
            }
          });
          return;
        }
        
        // Fetch and process
        const blob = await fetchImageAsBlob(url);
        const bitmap = await decodeImage(blob);
        
        // Recalculate dimensions based on actual image
        const { width, height } = calculateDimensions(
          bitmap.width,
          bitmap.height,
          maxWidth,
          maxHeight
        );
        
        const optimizedBlob = await processImage(bitmap, width, height, format);
        
        // Cache the result
        const newCacheKey = generateCacheKey(url, width, height, format);
        await cacheOptimizedImage(newCacheKey, optimizedBlob);
        
        self.postMessage({
          id,
          type: 'OPTIMIZE_RESULT',
          payload: {
            success: true,
            blob: optimizedBlob,
            fromCache: false,
            cacheKey: newCacheKey,
            width,
            height
          }
        });
        break;
      }
      
      case 'GET_IMAGE_INFO': {
        const { url } = payload;
        
        const blob = await fetchImageAsBlob(url);
        const bitmap = await decodeImage(blob);
        
        self.postMessage({
          id,
          type: 'IMAGE_INFO_RESULT',
          payload: {
            success: true,
            width: bitmap.width,
            height: bitmap.height,
            aspectRatio: bitmap.width / bitmap.height
          }
        });
        break;
      }
      
      case 'CLEAR_CACHE': {
        const cache = await openImageCache();
        const keys = await cache.keys();
        await Promise.all(keys.map(request => cache.delete(request.url)));
        
        self.postMessage({
          id,
          type: 'CACHE_CLEARED',
          payload: { success: true, deletedCount: keys.length }
        });
        break;
      }
      
      case 'GET_CACHE_SIZE': {
        const cache = await openImageCache();
        const keys = await cache.keys();
        
        self.postMessage({
          id,
          type: 'CACHE_SIZE_RESULT',
          payload: { size: keys.length, maxSize: MAX_CACHE_SIZE }
        });
        break;
      }
      
      default:
        self.postMessage({
          id,
          type: 'ERROR',
          payload: { error: `Unknown message type: ${type}` }
        });
    }
  } catch (error) {
    self.postMessage({
      id,
      type: 'ERROR',
      payload: { error: error.message, stack: error.stack }
    });
  }
};

// Notify that worker is ready
self.postMessage({ type: 'WORKER_READY' });