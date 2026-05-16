/* Minimal JS for UI-Verse Progress Indicators
   - Updates linear + circular percent/value
   - Updates wizard stepper state and label
*/

(function(){
  function clamp(n, min, max){
    n = Number(n);
    if (Number.isNaN(n)) return min;
    return Math.max(min, Math.min(max, n));
  }

  function setLinear(el, percent){
    percent = clamp(percent, 0, 100);
    el.style.setProperty('--pv-percent', percent);

    const valueEl = el.querySelector('[data-pv-role="value"]');
    if(valueEl) valueEl.textContent = `${Math.round(percent)}%`;

    const labelEl = el.querySelector('[data-pv-role="label"]');
    const helperEl = el.querySelector('[data-pv-role="helper"]');
    if(labelEl && labelEl.dataset.pvTemplate){
      labelEl.textContent = labelEl.dataset.pvTemplate.replace('{percent}', Math.round(percent));
    }
    if(helperEl && helperEl.dataset.pvTemplate){
      helperEl.textContent = helperEl.dataset.pvTemplate.replace('{percent}', Math.round(percent));
    }
  }

  function initCircularMetrics(el){
    // read circle radius
    const circle = el.querySelector('circle[data-pv-role="progress"]');
    if(!circle) return;
    const r = Number(circle.getAttribute('r'));
    const circ = 2 * Math.PI * r;
    el.style.setProperty('--pv-circ', circ);
  }

  function setCircular(el, percent){
    percent = clamp(percent, 0, 100);
    el.style.setProperty('--pv-percent', percent);

    const valueEl = el.querySelector('[data-pv-role="value"]');
    if(valueEl) valueEl.textContent = `${Math.round(percent)}%`;

    const helperEl = el.querySelector('[data-pv-role="helper"]');
    if(helperEl && helperEl.dataset.pvTemplate){
      helperEl.textContent = helperEl.dataset.pvTemplate.replace('{percent}', Math.round(percent));
    }
    const labelEl = el.querySelector('[data-pv-role="label"]');
    if(labelEl && labelEl.dataset.pvTemplate){
      labelEl.textContent = labelEl.dataset.pvTemplate.replace('{percent}', Math.round(percent));
    }
  }

  function setWizard(wizEl, step, totalSteps){
    step = clamp(step, 1, totalSteps);

    const percent = totalSteps <= 1 ? 100 : ((step - 1) / (totalSteps - 1)) * 100;
    wizEl.style.setProperty('--pv-percent', percent);

    const stepPill = wizEl.querySelector('[data-pv-role="pill"]');
    if(stepPill){
      stepPill.textContent = `${step} / ${totalSteps}`;
    }

    wizEl.querySelectorAll('[data-pv-role="node"]').forEach((node, idx) => {
      const nodeStep = idx + 1;
      const state = nodeStep < step ? 'done' : (nodeStep === step ? 'active' : 'todo');
      node.dataset.state = state;
    });

    // helper label template: "Step {current} of {total}" or similar
    const helperEl = wizEl.querySelector('[data-pv-role="helper"]');
    if(helperEl && helperEl.dataset.pvTemplate){
      helperEl.textContent = helperEl.dataset.pvTemplate
        .replace('{current}', step)
        .replace('{total}', totalSteps);
    }
  }

  function startDemoLinear({selector, from, to, durationMs, stepMs, color}){
    const el = document.querySelector(selector);
    if(!el) return;
    if(color) el.style.setProperty('--pv-color', color);

    const start = performance.now();
    const tick = () => {
      const now = performance.now();
      const t = clamp((now - start) / durationMs, 0, 1);
      const p = from + (to - from) * t;
      setLinear(el, p);
      if(t < 1) requestAnimationFrame(tick);
    };
    setLinear(el, from);
    requestAnimationFrame(tick);
  }

  function startDemoCircular({selector, from, to, durationMs, color}){
    const el = document.querySelector(selector);
    if(!el) return;
    if(color) el.style.setProperty('--pv-color', color);

    initCircularMetrics(el);

    const start = performance.now();
    const tick = () => {
      const now = performance.now();
      const t = clamp((now - start) / durationMs, 0, 1);
      const p = from + (to - from) * t;
      setCircular(el, p);
      if(t < 1) requestAnimationFrame(tick);
    };
    setCircular(el, from);
    requestAnimationFrame(tick);
  }

  function startWizardDemo({selector, step, totalSteps}){
    const wiz = document.querySelector(selector);
    if(!wiz) return;
    setWizard(wiz, step, totalSteps);
  }

  // Expose minimal API (optional)
  window.UIVerseProgress = {
    setLinear,
    setCircular,
    setWizard
  };

  document.addEventListener('DOMContentLoaded', () => {
    const linear0 = {
      selector: '#demo-linear',
      from: 0,
      to: 100,
      durationMs: 3800,
      color: '#3b82f6'
    };

    const circular0 = {
      selector: '#demo-circular',
      from: 25,
      to: 100,
      durationMs: 4200,
      color: '#8b5cf6'
    };

    const wizard0 = {
      selector: '#demo-wizard',
      step: 2,
      totalSteps: Number(document.querySelector('#demo-wizard')?.dataset.pvTotalSteps || 4)
    };

    startDemoLinear(linear0);
    startDemoCircular(circular0);
    startWizardDemo(wizard0);

    // Dynamic update demo (progress changes over time)
    const dynamic = {
      linearSel: '#demo-dynamic-linear',
      circularSel: '#demo-dynamic-circular',
      durationMs: 5200
    };

    const dynLinear = document.querySelector(dynamic.linearSel);
    const dynCircular = document.querySelector(dynamic.circularSel);
    if(dynCircular) initCircularMetrics(dynCircular);

    if(dynLinear && dynCircular){
      let running = true;
      const start = performance.now();
      const tick = () => {
        if(!running) return;
        const now = performance.now();
        const t = ((now - start) % dynamic.durationMs) / dynamic.durationMs;

        // ease in/out by using smoothstep-ish transform
        const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
        const p = 10 + eased * 90;
        setLinear(dynLinear, p);
        setCircular(dynCircular, p);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);

      const btn = document.querySelector('#pv-toggle-dynamic');
      if(btn){
        btn.addEventListener('click', () => {
          running = !running;
          btn.textContent = running ? 'Pause dynamic update' : 'Resume dynamic update';
          if(running){
            // reset start time for nicer feel
            // easiest: reload page; but keep it simple: just resume without reset.
            requestAnimationFrame(() => {
              const start2 = performance.now();
              const loop = () => {
                if(!running) return;
                const now = performance.now();
                const t = ((now - start2) % dynamic.durationMs) / dynamic.durationMs;
                const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
                const p = 10 + eased * 90;
                setLinear(dynLinear, p);
                setCircular(dynCircular, p);
                requestAnimationFrame(loop);
              };
              requestAnimationFrame(loop);
            });
          }
        });
      }
    }

    // Small wizard interaction: step through nodes
    const wiz = document.querySelector('#demo-wizard');
    const nextBtn = document.querySelector('#pv-wiz-next');
    const prevBtn = document.querySelector('#pv-wiz-prev');
    if(wiz && nextBtn && prevBtn){
      const total = Number(wiz.dataset.pvTotalSteps || 4);
      let cur = Number(wiz.dataset.pvCurrentStep || 1);
      setWizard(wiz, cur, total);

      const refresh = () => setWizard(wiz, cur, total);
      prevBtn.addEventListener('click', () => { cur = clamp(cur - 1, 1, total); refresh(); });
      nextBtn.addEventListener('click', () => { cur = clamp(cur + 1, 1, total); refresh(); });
    }
  });
})();

