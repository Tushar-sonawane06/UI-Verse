document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.getElementById('pricingSearch');
  const filterPills = document.querySelectorAll('.filter-pill');
  const noResults = document.getElementById('pricingNoResults');

  // Skip the hero card (it has no data-layout)
  const cards = document.querySelectorAll('.component-card[data-layout]');

  let activeFilter = 'all';

  function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
      const layout = card.getAttribute('data-layout');
      const text = card.textContent.toLowerCase();

      const matchesFilter = activeFilter === 'all' || layout === activeFilter;
      const matchesSearch = searchTerm === '' || text.includes(searchTerm);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('filtered-out');
        visibleCount++;
      } else {
        card.classList.add('filtered-out');
      }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      activeFilter = pill.getAttribute('data-filter');
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);

});