

const API_URL =
  "https://api.github.com/repos/Tushar-sonawane06/UI-Verse/contributors";

const CONTRIBUTORS_CACHE_KEY = 'ui-verse-contributors-v1';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours



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

      card.innerHTML = `

        <img
          src="${contributor.avatar_url}"
          alt="${contributor.login}"
          class="contributor-avatar"
        />

        <h3 class="contributor-name">
          ${contributor.login}
        </h3>

        <div class="contributor-role">
          <i class="fa-solid fa-code"></i>
          ${labels[index % labels.length]}
        </div>

        <br>

        <a
          href="${contributor.html_url}"
          target="_blank"
          class="github-link"
        >
          <i class="fab fa-github"></i>
          View Profile
        </a>

      `;

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
    card.innerHTML = `
      <img src="${contributor.avatar_url}" alt="${contributor.login}" class="contributor-avatar" />
      <h3 class="contributor-name">${contributor.login}</h3>
      <div class="contributor-role"><i class="fa-solid fa-code"></i> ${labels[index % labels.length]}</div>
      <br>
      <a href="${contributor.html_url}" target="_blank" class="github-link"><i class="fab fa-github"></i> View Profile</a>
    `;
    grid.appendChild(card);
  });
}

function showMessage(grid, message) {
  grid.innerHTML = `
    <div style="padding:24px;border-radius:12px;background:#fff3cd;color:#856404;font-weight:600;">
      ${message}
    </div>
  `;
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