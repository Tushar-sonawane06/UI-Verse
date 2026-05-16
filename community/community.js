function postComment(){

  const input = document.getElementById("commentInput");
  const wrapper = document.getElementById("commentsWrapper");

  if (!input || !wrapper) {
    return;
  }

  const text = input.value.trim();

  if(text === ""){
    if (window.UIVERSE_DEBUG) alert("Please write a comment first.");
    return;
  }

  const card = document.createElement("div");
  card.className = "comment-card";

  const top = document.createElement("div");
  top.className = "comment-top";

  const profile = document.createElement("div");
  profile.className = "comment-profile";

  const avatar = document.createElement("img");
  avatar.src = "https://i.pravatar.cc/100?img=32";
  avatar.alt = "";

  const profileText = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "You";
  const time = document.createElement("span");
  time.textContent = "Just now";
  profileText.appendChild(title);
  profileText.appendChild(time);

  profile.appendChild(avatar);
  profile.appendChild(profileText);

  const moreBtn = document.createElement("button");
  moreBtn.className = "more-btn";
  moreBtn.type = "button";
  moreBtn.textContent = "⋮";

  top.appendChild(profile);
  top.appendChild(moreBtn);

  const commentText = document.createElement("p");
  commentText.className = "comment-text";
  commentText.textContent = text;

  const footer = document.createElement("div");
  footer.className = "comment-footer";

  const likeBtn = document.createElement("button");
  likeBtn.type = "button";
  likeBtn.setAttribute("onclick", "likeComment(this)");
  likeBtn.appendChild(document.createTextNode("❤️ "));
  const likeCount = document.createElement("span");
  likeCount.textContent = "0";
  likeBtn.appendChild(likeCount);

  const replyBtn = document.createElement("button");
  replyBtn.type = "button";
  replyBtn.textContent = "💬 Reply";

  const shareBtn = document.createElement("button");
  shareBtn.type = "button";
  shareBtn.textContent = "🔗 Share";

  footer.appendChild(likeBtn);
  footer.appendChild(replyBtn);
  footer.appendChild(shareBtn);

  card.appendChild(top);
  card.appendChild(commentText);
  card.appendChild(footer);

  wrapper.prepend(card);

  input.value = "";

}

function likeComment(button){

  const span = button.querySelector("span");

  if (!span) return;

  let count = parseInt(span.innerText);

  count++;

  span.innerText = count;

}