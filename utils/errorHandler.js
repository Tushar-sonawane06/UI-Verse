// In-memory fallback for when localStorage is blocked or full
const memoryStorage = new Map();

export const safeStorage = {
  setItem: (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      console.warn(`localStorage blocked or full. Falling back to memory storage for key: ${key}`);
      memoryStorage.set(key, value);
    }
  },
  getItem: (key) => {
    try {
      return window.localStorage.getItem(key) || memoryStorage.get(key) || null;
    } catch (e) {
      return memoryStorage.get(key) || null;
    }
  }
};

export const safeFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('safeFetch encountered an error:', error);
    return { data: null, error };
  }
};