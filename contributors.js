

const API_URL =
  "https://api.github.com/repos/Tushar-sonawane06/UI-Verse/contributors";



const labels = [
  
  "Open Source Contributor",
  
];


async function fetchContributors() {

  const grid =
    document.getElementById("contributorsGrid");

  try {

    const response =
      await fetch(API_URL);

    const contributors =
      await response.json();

    grid.innerHTML = "";

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

  }

  catch (error) {

    grid.innerHTML = `

      <div style="
        padding:40px;
        border-radius:24px;
        background:#ffe7e7;
        color:#d63031;
        font-weight:700;
      ">

        Failed to load contributors.

      </div>

    `;

    console.error(error);
  }

}


fetchContributors();