// Client-side collection sync manager
(function (window) {
  const SYNC_TAG = 'collections-sync';
  const SYNC_ENDPOINT = '/api/collections/sync';

  function isOnline() {
    return navigator.onLine;
  }

  async function registerForBackgroundSync() {
    if (!('serviceWorker' in navigator)) return null;
    try {
      const reg = await navigator.serviceWorker.ready;
      if ('sync' in reg) {
        try { await reg.sync.register(SYNC_TAG); } catch (e) { /* ignore */ }
      }
      return reg;
    } catch (e) {
      return null;
    }
  }

  async function processQueueOnce() {
    const queue = await window.UIV.idb.getAllQueue();
    if (!queue || queue.length === 0) return {synced:0};
    try {
      // Send to server in one batch
      const res = await fetch(SYNC_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({actions: queue}),
        credentials: 'include'
      });
      if (!res.ok) throw new Error('Sync failed');
      // Clear queue on success
      const ids = queue.map(q => q.id).filter(Boolean);
      await window.UIV.idb.clearQueue(ids);
      return {synced: ids.length};
    } catch (err) {
      return {synced: 0, error: String(err)};
    }
  }

  async function enqueueAction(action) {
    await window.UIV.idb.addToQueue(action);
    // optimistic local update
    if (action.type === 'add') {
      await window.UIV.idb.putCollectionItem(action.item);
    } else if (action.type === 'remove') {
      await window.UIV.idb.deleteCollectionItem(action.itemId);
    }
    // try background sync registration
    await registerForBackgroundSync();
    // if online try immediate sync as well
    if (isOnline()) {
      await processQueueOnce();
    }
  }

  // expose
  window.CollectionSync = {
    enqueueAdd: (item) => enqueueAction({type:'add', item}),
    enqueueRemove: (itemId) => enqueueAction({type:'remove', itemId}),
    processQueueOnce,
    registerForBackgroundSync,
  };
})(self);
