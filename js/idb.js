// Minimal IndexedDB helper for storing sync queue and collections
(function (window) {
  const DB_NAME = 'ui-verse-db';
  const DB_VERSION = 1;
  const STORE_QUEUE = 'sync-queue';
  const STORE_COLLECTIONS = 'collections';

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_QUEUE)) {
          db.createObjectStore(STORE_QUEUE, { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains(STORE_COLLECTIONS)) {
          db.createObjectStore(STORE_COLLECTIONS, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  function withStore(storeName, mode, callback) {
    return openDB().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, mode);
      const store = tx.objectStore(storeName);
      let result;
      try {
        result = callback(store);
      } catch (err) {
        reject(err);
      }
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error);
    }));
  }

  function addToQueue(action) {
    return withStore(STORE_QUEUE, 'readwrite', store => store.add(Object.assign({ts: Date.now()}, action)));
  }

  function getAllQueue() {
    return openDB().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_QUEUE, 'readonly');
      const store = tx.objectStore(STORE_QUEUE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    }));
  }

  function clearQueue(ids) {
    return openDB().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_QUEUE, 'readwrite');
      const store = tx.objectStore(STORE_QUEUE);
      ids.forEach(id => store.delete(id));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    }));
  }

  function putCollectionItem(item) {
    return withStore(STORE_COLLECTIONS, 'readwrite', store => store.put(item));
  }

  function deleteCollectionItem(id) {
    return withStore(STORE_COLLECTIONS, 'readwrite', store => store.delete(id));
  }

  function getAllCollections() {
    return openDB().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_COLLECTIONS, 'readonly');
      const store = tx.objectStore(STORE_COLLECTIONS);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    }));
  }

  window.UIV = window.UIV || {};
  window.UIV.idb = {
    addToQueue,
    getAllQueue,
    clearQueue,
    putCollectionItem,
    deleteCollectionItem,
    getAllCollections,
  };
})(self);
