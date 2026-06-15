const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const profileContainer = document.getElementById("profileContainer");

searchBtn.addEventListener("click", () => {
    const username = searchInput.value.trim();

    if(username){
        getUser(username);
    }
});

async function getUser(username){

    profileContainer.innerHTML =
    `<div class="loader"></div>`;

    try{

        const userRes =
        await fetch(`https://api.github.com/users/${username}`);

        if(!userRes.ok){
            throw new Error();
        }

        const user = await userRes.json();

        const repoRes =
        await fetch(user.repos_url);

        const repos =
        await repoRes.json();

        showProfile(user,repos);

    }

    catch{

        profileContainer.innerHTML =
        `<div class="error">
        User Not Found
        </div>`;
    }
}

function showProfile(user,repos){

profileContainer.innerHTML =

`
<div class="profile-card">

<div class="profile-left">
<img src="${user.avatar_url}">
</div>

<div class="profile-right">

<h2>${user.name || user.login}</h2>

<p>${user.bio || "No Bio Available"}</p>

<div class="stats">
<div class="stat">
Followers: ${user.followers}
</div>

<div class="stat">
Following: ${user.following}
</div>

<div class="stat">
Repos: ${user.public_repos}
</div>
</div>

<p>📍 ${user.location || "Not Available"}</p>

<p>
<a href="${user.html_url}" target="_blank">
Visit Profile
</a>
</p>

<div class="repo-container">

${repos
.sort((a,b)=>b.stargazers_count-a.stargazers_count)
.slice(0,6)
.map(repo => `
<div class="repo">

<a href="${repo.html_url}" target="_blank">
${repo.name}
</a>

<p>
⭐ ${repo.stargazers_count}
</p>

<p>
🍴 ${repo.forks_count}
</p>

</div>
`).join("")}

</div>

</div>

</div>
`;
}