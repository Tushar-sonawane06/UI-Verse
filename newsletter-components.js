(function(){
  // Namespace to avoid collisions
  const NC = window.NC = window.NC || {};

  // Small helper to animate showing/hiding of code blocks
  NC.toggleCodeAnimated = function(id, btn){
    const el = document.getElementById(id);
    if(!el) return;
    const opening = !el.classList.contains('open');
    if(opening){
      el.classList.add('open');
      el.style.display = 'block';
      requestAnimationFrame(()=> el.scrollIntoView({behavior:'smooth', block:'nearest'}));
    } else {
      el.classList.remove('open');
      // small delay to allow CSS animation (if any)
      setTimeout(()=> el.style.display = 'none', 180);
    }
    if(btn) btn.classList.toggle('active', opening);
  };

  // Copy helper with optimistic UI
  NC.copyCode = function(id, btn){
    const el = document.getElementById(id);
    if(!el) return;
    const text = (el.innerText || el.textContent || '').trim();
    const origHtml = btn && btn.innerHTML;

    function showTemp(textLabel){
      if(!btn) return;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ${textLabel}`;
      btn.classList.add('copied');
      setTimeout(()=>{ if(btn) btn.innerHTML = origHtml; btn.classList.remove('copied'); }, 1200);
    }

    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(()=> showTemp('Copied'), ()=> fallbackCopy(text, showTemp));
    } else {
      fallbackCopy(text, showTemp);
    }
  };

  function fallbackCopy(text, onDone){
    try{
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly','');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if(ok) onDone && onDone('Copied'); else onDone && onDone('Copy');
    }catch(e){
      alert('Copy failed — please select and copy manually');
    }
  }

  // Delegate clicks for view/copy buttons when onclick isn't used
  NC.delegateActions = function(){
    document.body.addEventListener('click', function(e){
      const v = e.target.closest('.view-btn, .action-btn.view-btn');
      if(v && v.dataset && v.dataset.target){
        e.preventDefault();
        NC.toggleCodeAnimated(v.dataset.target, v);
        return;
      }
      const c = e.target.closest('.copy-btn, .action-btn.copy-btn');
      if(c && c.dataset && c.dataset.target){
        e.preventDefault();
        NC.copyCode(c.dataset.target, c);
        return;
      }
    });
  };

  // Intercept demo form submissions and show ephemeral success
  NC.attachDemoForms = function(){
    document.querySelectorAll('form.newsletter-form, .newsletter-form').forEach(form=>{
      form.addEventListener('submit', function(e){
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]') || form.querySelector('button');
        if(btn) btn.disabled = true;
        const success = document.createElement('div');
        success.className = 'success mt-8 fade-in';
        success.innerText = "Thanks — check your inbox for confirmation.";
        form.parentNode && form.parentNode.insertBefore(success, form.nextSibling);
        setTimeout(()=>{ if(btn) btn.disabled = false; success.remove(); }, 2800);
      });
    });
  };

  // Auto-scan pre elements and make them tabbable and copyable
  NC.enhanceCodeBlocks = function(){
    document.querySelectorAll('pre.code-block').forEach(pre=>{
      pre.setAttribute('tabindex','0');
      // add a small copy button to the top-right if not present
      if(!pre.querySelector('.code-copy-inline')){
        const btn = document.createElement('button');
        btn.className = 'code-copy-inline copy-btn';
        btn.type = 'button';
        btn.style.cssText = 'position:absolute;right:8px;top:8px;z-index:10;';
        btn.innerHTML = '<i class="fa-solid fa-copy"></i>';
        btn.addEventListener('click', function(){
          const id = pre.id;
          if(id) NC.copyCode(id, btn);
          else fallbackCopy(pre.innerText, ()=>{});
        });
        // wrapper for position: make sure pre is positioned
        pre.style.position = pre.style.position || 'relative';
        pre.appendChild(btn);
      }
    });
  };

  // Init on DOM ready
  NC.init = function(){
    NC.delegateActions();
    NC.enhanceCodeBlocks();
    NC.attachDemoForms();

    // Wire dataset-target attributes for existing buttons that use onclick
    document.querySelectorAll('.action-btn.view-btn').forEach(btn=>{
      if(!btn.dataset.target){
        const on = btn.getAttribute('onclick') || '';
        const m = on.match(/toggleCode\(['\"]([^'\"]+)['\"]\s*,/);
        if(m && m[1]) btn.dataset.target = m[1];
      }
    });
    document.querySelectorAll('.action-btn.copy-btn').forEach(btn=>{
      if(!btn.dataset.target){
        const on = btn.getAttribute('onclick') || '';
        const m = on.match(/copyCode\(['\"]([^'\"]+)['\"]\s*,/);
        if(m && m[1]) btn.dataset.target = m[1];
      }
    });

    // Accessibility: ensure focus-visible class toggles for keyboard users
    document.addEventListener('keydown', function(e){ if(e.key === 'Tab') document.body.classList.add('user-is-tabbing'); });
  };

  // Auto-run
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', NC.init);
  else NC.init();

})();

/* ---------------------------------------------------------------------------
   Bulk utilities and demo helpers (expanded)
   - Debounce / throttle helpers
   - Email validation + mock subscribe API
   - Analytics batching (in-memory) + flush
   - Keyboard shortcuts for the showcase
   - Theme toggling and preference persistence
   - Modal helpers and toast notifications
   - Component generator for stress-testing the UI grid
   - Lightweight self-tests for runtime sanity checks
   --------------------------------------------------------------------------- */

(function(){
  const NC = window.NC = window.NC || {};

  /* debounce: delays invoking fn until after wait ms have passed */
  NC.debounce = function(fn, wait){
    let t = null;
    return function(...args){
      clearTimeout(t);
      t = setTimeout(()=> fn.apply(this, args), wait);
    };
  };

  /* throttle: ensures fn runs at most once per interval */
  NC.throttle = function(fn, interval){
    let last = 0;
    let timer = null;
    return function(...args){
      const now = Date.now();
      const remaining = interval - (now - last);
      clearTimeout(timer);
      if(remaining <= 0){
        last = now;
        fn.apply(this, args);
      } else {
        timer = setTimeout(()=>{
          last = Date.now();
          fn.apply(this, args);
        }, remaining);
      }
    };
  };

  /* Basic email validator (simple but practical) */
  NC.validateEmail = function(email){
    if(!email || typeof email !== 'string') return false;
    email = email.trim();
    // lightweight regex for emails used in demos (not RFC-perfect)
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  };

  /* Mock subscribe API: returns a Promise that resolves after a delay.
     Use this for demo flows instead of network calls. */
  NC.mockSubscribe = function(email, opts = {}){
    return new Promise((resolve, reject)=>{
      if(!NC.validateEmail(email)) return reject(new Error('invalid_email'));
      const delay = opts.delay || 550 + Math.floor(Math.random()*700);
      setTimeout(()=>{
        // simulate 3% failure rate
        if(Math.random() < 0.03) return reject(new Error('network'));
        // return a small subscriber object
        resolve({ email, id: 's_' + Math.random().toString(36).slice(2,9), ts: Date.now() });
      }, delay);
    });
  };

  /* Simple analytics queue: stores events in-memory and flushes periodically */
  NC.analyticsQueue = NC.analyticsQueue || [];
  NC.trackEvent = function(name, payload){
    NC.analyticsQueue.push({ name, payload: payload || {}, ts: Date.now() });
    // flush if queue grows too big
    if(NC.analyticsQueue.length >= 8) NC.flushAnalytics();
  };

  NC.flushAnalytics = function(){
    if(!NC.analyticsQueue.length) return;
    // simulate an async send (no actual network used in demo)
    const batch = NC.analyticsQueue.splice(0, NC.analyticsQueue.length);
    // log to console for debugging during development
    console.debug('NC analytics flush', batch);
    // pretend to POST by returning a resolved promise
    return Promise.resolve({ ok:true, sent: batch.length });
  };

  // flush on pagehide to attempt delivery before unload
  window.addEventListener('pagehide', ()=>{ try{ NC.flushAnalytics(); }catch(e){} });

  /* Keyboard shortcuts used by the showcase. Non-invasive and optional.
     - ? toggles help overlay
     - g then c generates components in the grid
     - t toggles theme
  */
  NC._kbd = { helpVisible: false };

  NC.toggleHelp = function(){
    NC._kbd.helpVisible = !NC._kbd.helpVisible;
    if(NC._kbd.helpVisible){
      let h = document.getElementById('nc-help-overlay');
      if(!h){
        h = document.createElement('div');
        h.id = 'nc-help-overlay';
        h.style.cssText = 'position:fixed;left:12px;bottom:12px;padding:12px;background:rgba(0,0,0,0.8);color:#fff;border-radius:8px;z-index:9999;max-width:320px;box-shadow:0 10px 40px rgba(0,0,0,0.4)';
        h.innerHTML = '<strong>Shortcuts</strong><div style="margin-top:8px;font-size:13px">? Toggle help<br>g c Generate 6 components<br>t Toggle theme<br>c Copy visible code</div>';
        document.body.appendChild(h);
      }
      h.style.display = 'block';
    } else {
      const h = document.getElementById('nc-help-overlay'); if(h) h.style.display = 'none';
    }
  };

  NC.toggleTheme = function(){
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
    NC.savePref('theme', dark ? 'light' : 'dark');
  };

  NC.savePref = function(k,v){ try{ localStorage.setItem('nc_pref_' + k, JSON.stringify(v)); } catch(e){} };
  NC.loadPref = function(k, fallback){ try{ const v = localStorage.getItem('nc_pref_' + k); return v ? JSON.parse(v) : fallback; } catch(e){ return fallback; } };

  /* Toast helper */
  NC.showToast = function(msg, opts = {}){
    const id = 'nc-toast-' + Math.random().toString(36).slice(2,8);
    const t = document.createElement('div');
    t.className = 'toast fade-in';
    t.id = id;
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(()=>{ t.style.opacity = '0'; t.style.transform = 'translateY(6px)'; setTimeout(()=> t.remove(), 350); }, opts.timeout || 2200);
  };

  /* Modal helper (very small) */
  NC.openModal = function(html){
    const overlay = document.createElement('div');
    overlay.className = 'nc-modal-overlay';
    overlay.style.cssText = 'position:fixed;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,0.6);z-index:10000;padding:20px';
    const box = document.createElement('div');
    box.style.cssText = 'background:#fff;padding:18px;border-radius:12px;max-width:720px;width:100%;box-shadow:0 30px 80px rgba(2,6,23,0.5)';
    box.innerHTML = html;
    overlay.appendChild(box);
    overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    return { overlay, box };
  };

  /* Component generator: create n simple variants and insert into the grid.
     Useful for load testing layout and styles. */
  NC.generateComponents = function(n, opts = {}){
    const root = document.querySelector('.components-grid');
    if(!root) return 0;
    const sampleTitles = ['Weekly Drops','Design Labs','Pattern Notes','UI Digest','Kit Releases','Editor Picks','Case Studies'];
    const count = Math.max(0, Math.min(200, n || 12));
    for(let i=0;i<count;i++){
      const id = 'gen_' + Date.now().toString(36).slice(5) + '_' + i;
      const art = document.createElement('article');
      art.className = 'component-card';
      const title = sampleTitles[i % sampleTitles.length] + (i>0?(' #' + (i+1)):'');
      const email = 'user+'+Math.floor(Math.random()*9999)+'@example.com';
      art.innerHTML = `<div class="card-top"><span class="card-label">${title}</span></div><div class="card-preview"><div class="newsletter-card" style="padding:14px;border-radius:10px;background:#fff;border:1px solid rgba(0,0,0,0.03)"><div style="display:flex;align-items:center;gap:10px"><div style="flex:1"><strong>${title}</strong><div style="font-size:13px;color:var(--muted-2)">Subscribe for ${Math.round(Math.random()*1000)}+ readers</div></div><div style="min-width:160px"><input placeholder="${email}" style="width:100%;padding:8px;border-radius:8px;border:1px solid #eee"/><button class="primary-nav-btn" style="width:100%;margin-top:6px">Subscribe</button></div></div></div></div><p class="card-desc">Auto-generated example.</p><div class="actions"><button class="action-btn view-btn" data-target="${id}"><i class="fa-solid fa-code"></i> View Code</button><button class="action-btn copy-btn" data-target="${id}"><i class="fa-solid fa-copy"></i> Copy</button></div><pre id="${id}" class="code-block" style="display:none"><code>${NC.escapeHtml ? NC.escapeHtml('<div>Auto-generated component</div>') : '<div>Auto-generated component</div>'}</code></pre>`;
      root.appendChild(art);
    }
    return count;
  };

  // Provide escapeHtml in NC if not present
  if(!NC.escapeHtml){
    NC.escapeHtml = function(s){ return (s||'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  }

  /* Wire some global hotkeys */
  (function(){
    let seq = '';
    document.addEventListener('keydown', function(e){
      // ignore when focused inside input/textarea
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if(tag === 'INPUT' || tag === 'TEXTAREA') return;
      if(e.key === '?') { NC.toggleHelp(); return; }
      if(e.key === 't') { NC.toggleTheme(); NC.showToast('Theme toggled'); return; }
      // sequence: g then c => generate components
      seq = (seq + e.key).slice(-2);
      if(seq === 'gc'){
        const added = NC.generateComponents(6);
        NC.showToast('Generated ' + added + ' components');
        NC.trackEvent('generate_components', { count: added });
        seq = '';
      }
    });
  })();

  /* tiny in-memory subscription store for demo purposes */
  NC.subscribers = NC.subscribers || [];
  NC.subscribeDemo = function(email){
    return NC.mockSubscribe(email).then(rec=>{
      NC.subscribers.push(rec);
      NC.trackEvent('demo_subscribe', { email: rec.email });
      NC.showToast('Subscribed: ' + rec.email);
      return rec;
    });
  };

  /* form auto-wiring: attach event listeners to common CTA buttons inside component-card */
  NC.wireCTAs = function(){
    document.querySelectorAll('.component-card').forEach(card=>{
      const btn = card.querySelector('button.primary-nav-btn, button');
      const input = card.querySelector('input[type="email"], input[placeholder]');
      if(btn && input && !btn.dataset.wired){
        btn.dataset.wired = '1';
        btn.addEventListener('click', function(e){
          const val = (input.value || input.getAttribute('placeholder') || '').trim();
          if(!NC.validateEmail(val)){
            // show inline error
            input.classList.add('is-invalid');
            NC.showToast('Please enter a valid email');
            setTimeout(()=> input.classList.remove('is-invalid'), 1400);
            return;
          }
          // run mock subscribe and show success
          btn.disabled = true;
          NC.mockSubscribe(val).then(rec=>{
            btn.disabled = false;
            NC.showToast('Subscribed: ' + rec.email);
            NC.trackEvent('cta_subscribed', { email: rec.email });
            // show success message inside card
            const s = document.createElement('div'); s.className = 'success mt-8'; s.innerText = 'Thanks — check your email.';
            card.appendChild(s); setTimeout(()=> s.remove(), 2500);
          }).catch(err=>{
            btn.disabled = false;
            NC.showToast('Subscription failed');
          });
        });
      }
    });
  };

  /* Public API: run a lightweight smoke test to ensure key features are available */
  NC.selfCheck = function(){
    const results = [];
    results.push({ key:'dom_ready', ok: !!document.body });
    results.push({ key:'code_blocks', ok: document.querySelectorAll('pre.code-block').length >= 1 });
    results.push({ key:'components_grid', ok: !!document.querySelector('.components-grid') });
    const failed = results.filter(r=>!r.ok);
    if(failed.length) console.warn('NC selfCheck failures', failed);
    else console.info('NC selfCheck OK', results);
    return results;
  };

  /* Expose convenience alias for external use */
  NC.readyNotify = function(cb){ if(document.readyState === 'complete' || document.readyState === 'interactive') cb(); else document.addEventListener('DOMContentLoaded', cb); };

  /* Auto-run additional wiring once DOM fully loaded */
  NC.readyNotify(function(){
    try{ NC.wireCTAs(); NC.enhanceCodeBlocks(); NC.attachDemoForms(); NC.trackEvent('page_view', { path: location.pathname }); NC.selfCheck(); }catch(e){ console.error('NC init extra wiring failed', e); }
  });

  /* Small export/import helpers so users can copy component data as JSON */
  NC.exportGenerated = function(){
    const nodes = Array.from(document.querySelectorAll('.component-card'));
    const items = nodes.map(n=>({ label: n.querySelector('.card-label')?.textContent || '', html: n.querySelector('.card-preview')?.innerHTML || '' }));
    return JSON.stringify(items, null, 2);
  };

  NC.importGenerated = function(json){
    try{
      const items = typeof json === 'string' ? JSON.parse(json) : json;
      const root = document.querySelector('.components-grid');
      if(!root) return 0;
      items.forEach(it=>{
        const art = document.createElement('article'); art.className='component-card';
        art.innerHTML = `<div class="card-top"><span class="card-label">${it.label}</span></div><div class="card-preview">${it.html}</div><p class="card-desc">Imported</p>`;
        root.appendChild(art);
      });
      NC.wireCTAs();
      return items.length;
    }catch(e){ console.error('import failed', e); return 0; }
  };

  // Expose NC globally (already done) and provide shorthand
  window.NC = NC;

})();

/* End of expanded newsletter-components.js */
