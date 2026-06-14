

const TagFilter = {
  _state: {
    activeTag: 'all'
  },
  injectStyles() {
  if (document.getElementById('tag-filter-styles')) return;

  const style = document.createElement('style');
  style.id = 'tag-filter-styles';

  style.textContent = `
    .uiv-tag-filter {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0;
    }

    .uiv-tag-btn {
      border: 1px solid var(--border-color, #ddd);
      background: transparent;
      padding: 8px 14px;
      border-radius: 999px;
      cursor: pointer;
      transition: 0.2s;
    }

    .uiv-tag-btn:hover {
      transform: translateY(-1px);
    }

    .uiv-tag-btn.active {
      background: var(--accent-color, #4f46e5);
      color: white;
    }
  `;

  document.head.appendChild(style);
},

  init() {
    const cards = document.querySelectorAll('.component-card');

    if (!cards.length) return;

    this.createFilterBar(cards);
  },

  createFilterBar(cards) {
    const categories = [
      'all',
      ...new Set(
        [...cards]
          .map(card => card.dataset.cat)
          .filter(Boolean)
      )
    ];

    const wrapper = document.createElement('div');
    wrapper.className = 'uiv-tag-filter';

    categories.forEach(category => {
      const btn = document.createElement('button');

      btn.className = 'uiv-tag-btn';
      btn.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

      btn.addEventListener('click', () => {
        this.filterCards(category);
        this.updateActive(btn);
      });

      wrapper.appendChild(btn);
    });

    const firstCard = cards[0];
    firstCard.parentElement.prepend(wrapper);
  },

  filterCards(category) {
    document
      .querySelectorAll('.component-card')
      .forEach(card => {
        const cardCategory = card.dataset.cat;

        if (
          category === 'all' ||
          cardCategory === category
        ) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

    this._state.activeTag = category;
  },

  updateActive(activeBtn) {
    document
      .querySelectorAll('.uiv-tag-btn')
      .forEach(btn =>
        btn.classList.remove('active')
      );

    activeBtn.classList.add('active');
  }
};

window.TagFilter = TagFilter;