/**
 * UIverse Pagination Component (Vanilla JS)
 *
 * Public API:
 *   Pagination.create({
 *     container: HTMLElement | string (selector),
 *     totalItems: number,
 *     pageSize: number,
 *     maxVisiblePages: number (controls ellipsis window size),
 *     showPageSizeSelector: boolean,
 *     pageSizeOptions: number[],
 *     onPageChange: ({ page, pageSize, totalPages }) => void
 *   })
 */

(function () {
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function range(start, endInclusive) {
    const out = [];
    for (let i = start; i <= endInclusive; i++) out.push(i);
    return out;
  }

  function computePageItems({ totalPages, currentPage, maxVisiblePages }) {
    // Always show: first + last.
    // Show an interior window around currentPage.
    // Insert ellipsis where gaps exist.

    if (totalPages <= 1) return [1];

    const maxInterior = Math.max(3, maxVisiblePages - 2); // minus first+last
    const half = Math.floor(maxInterior / 2);

    let windowStart = currentPage - half;
    let windowEnd = currentPage + (maxInterior - half - 1);

    windowStart = clamp(windowStart, 2, totalPages - 1);
    windowEnd = clamp(windowEnd, 2, totalPages - 1);

    // If clamping collapsed the window (near edges), try to expand it back.
    const windowSize = windowEnd - windowStart + 1;
    if (windowSize < maxInterior) {
      const missing = maxInterior - windowSize;
      windowStart = clamp(windowStart - missing, 2, totalPages - 1);
    }

    const pages = new Set();
    pages.add(1);
    pages.add(totalPages);
    for (const p of range(windowStart, windowEnd)) pages.add(p);

    const sorted = Array.from(pages).sort((a, b) => a - b);

    const items = [];
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i];
      items.push({ type: 'page', value: p });

      const next = sorted[i + 1];
      if (next && next - p > 1) {
        items.push({ type: 'ellipsis' });
      }
    }
    return items;
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'className') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k.startsWith('data-')) node.setAttribute(k, v);
      else if (k === 'html') node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    for (const child of children) {
      if (child == null) continue;
      node.appendChild(child);
    }
    return node;
  }

  function createPaginationDOM(state) {
    const wrapper = state.wrapper;
    wrapper.innerHTML = '';

    const sizeRow = state.showPageSizeSelector
      ? el('div', { className: 'pagination-page-size' }, [
          el('span', { className: 'pagination-label', text: 'Items per page' }),
          (() => {
            const select = el('select', {
              className: 'pagination-select',
              'aria-label': 'Items per page',
              value: String(state.pageSize)
            });
            for (const opt of state.pageSizeOptions) {
              const o = document.createElement('option');
              o.value = String(opt);
              o.textContent = String(opt);
              if (opt === state.pageSize) o.selected = true;
              select.appendChild(o);
            }
            select.addEventListener('change', () => {
              const nextSize = Number(select.value);
              state.pageSize = nextSize;
              state.currentPage = 1;
              state.render();
              state.onPageChange?.({
                page: state.currentPage,
                pageSize: state.pageSize,
                totalPages: state.totalPages
              });
            });
            return select;
          })()
        ])
      : null;

    if (sizeRow) wrapper.appendChild(sizeRow);

    const pag = el('div', { className: 'pagination', role: 'navigation' });

    // Prev
    const prevBtn = el('button', {
      className: 'pagination-btn',
      type: 'button',
      'aria-label': 'Previous page'
    }, []);
    prevBtn.innerHTML = '&#x2039;'; // ‹
    if (state.currentPage <= 1) prevBtn.classList.add('is-disabled');
    prevBtn.addEventListener('click', () => {
      if (state.currentPage <= 1) return;
      state.currentPage -= 1;
      state.render();
      state.onPageChange?.({
        page: state.currentPage,
        pageSize: state.pageSize,
        totalPages: state.totalPages
      });
    });

    // Page items (with ellipsis)
    const pagesEl = el('div', { className: 'pagination-control' });

    const items = computePageItems({
      totalPages: state.totalPages,
      currentPage: state.currentPage,
      maxVisiblePages: state.maxVisiblePages
    });

    // For mobile: hide pages that are far from current and not boundaries.
    // We'll mark pages with a heuristic so CSS can hide them.
    const mobileHideDistance = 2;

    for (const item of items) {
      if (item.type === 'ellipsis') {
        pagesEl.appendChild(el('span', { className: 'pagination-ellipsis', text: '…' }));
        continue;
      }

      const p = item.value;
      const isActive = p === state.currentPage;

      const btn = el('button', {
        className: 'pagination-btn pagination-page' + (isActive ? ' is-active' : ''),
        type: 'button',
        'aria-current': isActive ? 'page' : 'false',
        'data-page': String(p),
        'aria-label': 'Page ' + String(p)
      });
      btn.textContent = String(p);

      // Mark some pages to hide on mobile.
      // Keep boundaries always visible.
      const isBoundary = p === 1 || p === state.totalPages;
      const isNear = Math.abs(p - state.currentPage) <= mobileHideDistance;
      if (!isBoundary && !isNear) btn.setAttribute('data-sp', 'hide-mobile');

      btn.disabled = isActive;
      if (isActive) btn.classList.add('is-disabled');

      btn.addEventListener('click', () => {
        if (p === state.currentPage) return;
        state.currentPage = p;
        state.render();
        state.onPageChange?.({
          page: state.currentPage,
          pageSize: state.pageSize,
          totalPages: state.totalPages
        });
      });

      pagesEl.appendChild(btn);
    }

    // Next
    const nextBtn = el('button', {
      className: 'pagination-btn',
      type: 'button',
      'aria-label': 'Next page'
    });
    nextBtn.innerHTML = '&#x203A;'; // ›
    if (state.currentPage >= state.totalPages) nextBtn.classList.add('is-disabled');
    nextBtn.addEventListener('click', () => {
      if (state.currentPage >= state.totalPages) return;
      state.currentPage += 1;
      state.render();
      state.onPageChange?.({
        page: state.currentPage,
        pageSize: state.pageSize,
        totalPages: state.totalPages
      });
    });

    pag.appendChild(prevBtn);
    pag.appendChild(pagesEl);
    pag.appendChild(nextBtn);

    wrapper.appendChild(pag);

    // Small helper text: current range
    const totalPages = state.totalPages;
    const from = totalPages === 0 ? 0 : (state.currentPage - 1) * state.pageSize + 1;
    const to = Math.min(state.totalItems, state.currentPage * state.pageSize);

    wrapper.appendChild(
      el('div', {
        style: 'font-size:12px;color:rgba(255,255,255,0.65);font-weight:700;text-align:center;',
        className: 'pagination-meta',
        text: state.totalItems === 0 ? '0 results' : `Showing ${from}–${to} of ${state.totalItems}`
      })
    );

    // Adjust helper for light mode (best-effort)
    const meta = wrapper.querySelector('.pagination-meta');
    if (meta) {
      meta.style.color = 'var(--pagination-muted)';
    }
  }

  const Pagination = {
    create(options) {
      const container = typeof options.container === 'string'
        ? document.querySelector(options.container)
        : options.container;

      if (!container) {
        throw new Error('Pagination.create: container not found');
      }

      const state = {
        wrapper: container,
        totalItems: Number(options.totalItems ?? 0),
        pageSize: Number(options.pageSize ?? 10),
        currentPage: Number(options.currentPage ?? 1),
        maxVisiblePages: Number(options.maxVisiblePages ?? 7),
        showPageSizeSelector: Boolean(options.showPageSizeSelector ?? false),
        pageSizeOptions: (options.pageSizeOptions && options.pageSizeOptions.length)
          ? options.pageSizeOptions.map((n) => Number(n)).filter((n) => n > 0)
          : [5, 10, 20, 50],
        onPageChange: typeof options.onPageChange === 'function' ? options.onPageChange : null,
        render: null,
        totalPages: 0
      };

      state.render = () => {
        state.totalPages = Math.max(1, Math.ceil(state.totalItems / state.pageSize));
        state.currentPage = clamp(state.currentPage, 1, state.totalPages);
        createPaginationDOM(state);
      };

      state.render();

      return {
        get state() {
          return {
            currentPage: state.currentPage,
            pageSize: state.pageSize,
            totalPages: state.totalPages,
            totalItems: state.totalItems
          };
        },
        setTotalItems(n) {
          state.totalItems = Number(n);
          state.currentPage = 1;
          state.render();
          state.onPageChange?.({
            page: state.currentPage,
            pageSize: state.pageSize,
            totalPages: state.totalPages
          });
        },
        setPageSize(n) {
          state.pageSize = Number(n);
          state.currentPage = 1;
          state.render();
          state.onPageChange?.({
            page: state.currentPage,
            pageSize: state.pageSize,
            totalPages: state.totalPages
          });
        },
        goToPage(p) {
          state.currentPage = clamp(Number(p), 1, state.totalPages);
          state.render();
          state.onPageChange?.({
            page: state.currentPage,
            pageSize: state.pageSize,
            totalPages: state.totalPages
          });
        }
      };
    }
  };

  // Expose globally
  window.Pagination = Pagination;
})();

