

const API_URL =
  "https://api.github.com/repos/Tushar-sonawane06/UI-Verse/contributors";

const CONTRIBUTORS_CACHE_KEY = 'ui-verse-contributors-v1';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours

function safeUrl(value, fallback = '#') {
  try {
    const url = new URL(String(value || ''), window.location.href);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.href : fallback;
  } catch (e) {
    return fallback;
  }
}



const labels = [
  
  "Open Source Contributor",
  
];


async function fetchContributors() {

  const grid =
    document.getElementById("contributorsGrid");

  // Early guard: nothing to do if the grid isn't present
  if (!grid) return;
  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      // Handle common HTTP errors (rate limit)
      if (response.status === 403) {
        // Try to use cached contributors if available
        const cachedRaw = localStorage.getItem(CONTRIBUTORS_CACHE_KEY);
        if (cachedRaw) {
          try {
            const cached = JSON.parse(cachedRaw);
            showMessage(grid, 'GitHub rate limit reached — showing cached contributors.');
            renderContributors(grid, cached.data || []);
            return;
          } catch (e) {
            console.warn('Failed to parse contributors cache', e);
          }
        }

        showMessage(grid, 'GitHub rate limit reached. Please try again later.');
        return;
      }

      // Other non-ok responses
      showMessage(grid, `Failed to load contributors (HTTP ${response.status}).`);
      return;
    }

    const contributors = await response.json();

    // Cache fresh data
    try {
      localStorage.setItem(CONTRIBUTORS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: contributors }));
    } catch (e) { /* ignore storage errors */ }

    grid.innerHTML = '';

    contributors.forEach((contributor, index) => {

      const card =
        document.createElement("div");

      card.className =
        "contributor-card";

      const img = document.createElement('img');
      img.src = safeUrl(contributor.avatar_url);
      img.alt = contributor.login || '';
      img.className = 'contributor-avatar';

      const name = document.createElement('h3');
      name.className = 'contributor-name';
      name.textContent = contributor.login || '';

      const role = document.createElement('div');
      role.className = 'contributor-role';
      const roleIcon = document.createElement('i');
      roleIcon.className = 'fa-solid fa-code';
      const roleText = document.createTextNode(` ${labels[index % labels.length]}`);
      role.appendChild(roleIcon);
      role.appendChild(roleText);

      const br = document.createElement('br');

      const link = document.createElement('a');
      link.href = safeUrl(contributor.html_url);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'github-link';
      const linkIcon = document.createElement('i');
      linkIcon.className = 'fab fa-github';
      link.appendChild(linkIcon);
      link.appendChild(document.createTextNode(' View Profile'));

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(br);
      card.appendChild(link);

      grid.appendChild(card);

    });

  } catch (error) {
    console.error(error);

    // Network or other failures — try cached data
    const cachedRaw = localStorage.getItem(CONTRIBUTORS_CACHE_KEY);
    if (cachedRaw) {
      try {
        const cached = JSON.parse(cachedRaw);
        // If cache is reasonably recent, show it
        if (cached.ts && (Date.now() - cached.ts) < CACHE_TTL_MS) {
          showMessage(grid, 'Offline — showing cached contributors.');
          renderContributors(grid, cached.data || []);
          return;
        }
      } catch (e) { /* fall through to error UI */ }
    }

    showMessage(grid, 'Failed to load contributors.');
  }

}


function renderContributors(grid, contributors) {
  grid.innerHTML = '';
  contributors.forEach((contributor, index) => {
    const card = document.createElement('div');
    card.className = 'contributor-card';

    const img = document.createElement('img');
    img.className = 'contributor-avatar';
    img.src = contributor.avatar_url || '';
    img.alt = contributor.login || '';

    const name = document.createElement('h3');
    name.className = 'contributor-name';
    name.textContent = contributor.login || '';

    const role = document.createElement('div');
    role.className = 'contributor-role';
    const roleIcon = document.createElement('i');
    roleIcon.className = 'fa-solid fa-code';
    role.appendChild(roleIcon);
    role.appendChild(document.createTextNode(` ${labels[index % labels.length]}`));

    const br = document.createElement('br');

    const link = document.createElement('a');
    link.className = 'github-link';
    link.href = contributor.html_url || '#';
    link.target = '_blank';
    link.innerHTML = '<i class="fab fa-github"></i> View Profile';

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(br);
    card.appendChild(link);

    grid.appendChild(card);
  });
}

function showMessage(grid, message) {
  grid.innerHTML = '';
  const box = document.createElement('div');
  box.style.padding = '24px';
  box.style.borderRadius = '12px';
  box.style.background = '#fff3cd';
  box.style.color = '#856404';
  box.style.fontWeight = '600';
  box.textContent = message;
  grid.appendChild(box);
}

// On initial load, if we have a recent cache show it quickly while fetching fresh data
(() => {
  const grid = document.getElementById('contributorsGrid');
  if (!grid) return;
  try {
    const cachedRaw = localStorage.getItem(CONTRIBUTORS_CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached.ts && (Date.now() - cached.ts) < CACHE_TTL_MS) {
        renderContributors(grid, cached.data || []);
      }
    }
  } catch (e) {}
})();


fetchContributors();