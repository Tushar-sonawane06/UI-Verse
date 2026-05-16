(function(){
  let scrollSyncBound = false;

  const FALLBACK_COMPONENTS = [
    { title: 'index.html', path: 'index.html' }
  ];

  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');
  const leftFrame = document.getElementById('leftFrame');
  const rightFrame = document.getElementById('rightFrame');
  const swapBtn = document.getElementById('swapBtn');
  const syncCheckbox = document.getElementById('syncScroll');
  const openBoth = document.getElementById('openBoth');
  const leftTitle = document.getElementById('leftTitle');
  const rightTitle = document.getElementById('rightTitle');

  // Load component list from data/components.json
  async function loadComponents(){
    try{
      let list = [];

      if (window.ComponentsRegistry && typeof window.ComponentsRegistry.load === 'function') {
        const state = await window.ComponentsRegistry.load();
        list = Array.isArray(state && state.items) ? state.items : [];
      } else {
        const res = await fetch('data/components.json');
        if (!res.ok) throw new Error('Failed fetching components.json');
        list = await res.json();
      }

      if (!Array.isArray(list) || list.length === 0) {
        list = FALLBACK_COMPONENTS;
        console.warn('[Compare] Component metadata unavailable; using fallback list.');
      }

      populateSelect(leftSelect, list);
      populateSelect(rightSelect, list);

      // default picks from URL params
      const params = new URLSearchParams(location.search);
      const l = params.get('left') || list[0] && list[0].path;
      const r = params.get('right') || list[1] && list[1].path || list[0] && list[0].path;
      if(l) leftSelect.value = l;
      if(r) rightSelect.value = r;
      loadFrames();
    }catch(err){
      console.error(err);
      // fallback: keep the UI usable even without component metadata
      populateSelect(leftSelect, FALLBACK_COMPONENTS);
      populateSelect(rightSelect, FALLBACK_COMPONENTS);
      leftSelect.value = 'index.html';
      rightSelect.value = 'index.html';
      leftTitle.textContent = 'index.html';
      rightTitle.textContent = 'index.html';
      if (window.UIVERSE_DEBUG) {
        console.warn('[Compare] Falling back to minimal component list.');
      }
    }
  }

  function populateSelect(sel, list){
    sel.innerHTML = '';
    list.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.path;
      opt.textContent = item.title + ' — ' + item.path;
      sel.appendChild(opt);
    });
  }

  function loadFrames(){
    const left = leftSelect.value;
    const right = rightSelect.value;
    leftFrame.src = left || 'index.html';
    rightFrame.src = right || 'index.html';
    leftTitle.textContent = left || 'Left';
    rightTitle.textContent = right || 'Right';
    // update URL
    const params = new URLSearchParams();
    if(left) params.set('left', left);
    if(right) params.set('right', right);
    history.replaceState(null, '', '?' + params.toString());
  }

  swapBtn.addEventListener('click', () => {
    const a = leftSelect.value;
    leftSelect.value = rightSelect.value;
    rightSelect.value = a;
    loadFrames();
  });

  leftSelect.addEventListener('change', loadFrames);
  rightSelect.addEventListener('change', loadFrames);

  openBoth.addEventListener('click', () => {
    window.open(leftSelect.value, '_blank');
    window.open(rightSelect.value, '_blank');
  });

  // Sync scroll logic: best-effort, only works when same-origin (file:// allowed in many browsers)
  let syncing = false;
  function syncScroll(sourceFrame, targetFrame){
    if(!syncCheckbox.checked) return;
    try{
      const sdoc = sourceFrame.contentWindow.document;
      const tdoc = targetFrame.contentWindow.document;
      const sTop = sourceFrame.contentWindow.scrollY || sourceFrame.contentWindow.pageYOffset || 0;
      const sHeight = sdoc.documentElement.scrollHeight - sourceFrame.clientHeight;
      const ratio = sHeight > 0 ? sTop / sHeight : 0;
      const tHeight = tdoc.documentElement.scrollHeight - targetFrame.clientHeight;
      const targetTop = Math.round(ratio * Math.max(0, tHeight));
      targetFrame.contentWindow.scrollTo(0, targetTop);
    }catch(e){
      // cross-origin or not yet loaded; ignore
    }
  }

  function attachScrollSync(frameA, frameB){
    function onScroll(){
      if(syncing) return;
      syncing = true;
      syncScroll(frameA, frameB);
      setTimeout(()=> syncing = false, 30);
    }

    try{
      if (frameA.contentWindow) {
        frameA.contentWindow.addEventListener('scroll', onScroll, { passive: true });
      }
    }catch(e){}
  }

  // Setup basic mutual sync when frames load
  if (!scrollSyncBound) {
    leftFrame.addEventListener('load', () => {
      if(syncCheckbox.checked){
        attachScrollSync(leftFrame, rightFrame);
      }
    });
    rightFrame.addEventListener('load', () => {
      if(syncCheckbox.checked){
        attachScrollSync(rightFrame, leftFrame);
      }
    });
    scrollSyncBound = true;
  }

  syncCheckbox.addEventListener('change', () => {
    // no-op; listeners re-attach on next load events
  });

  // Initialize
  loadComponents();
})();