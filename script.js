const links = {
  playlist: "https://open.spotify.com/playlist/1BpYGrtIuneBScIBb38imk",
  photos: "photo.html",
  letter: "https://docs.google.com/document/",
  note: "https://drive.google.com/file/d/14jTGLkHCJxIwi0Xf76iXI4kio4-pLvPw/view?usp=drive_link",
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const destination = links[link.dataset.link];

  if (destination) {
    link.href = destination;
  }
});

const seal = document.querySelector("#seal");
const envelope = document.querySelector("#envelope");
const letter = document.querySelector("#letter");

seal.addEventListener("click", () => {
  envelope.classList.add("is-open");
  seal.setAttribute("aria-expanded", "true");
  seal.textContent = "opening...";
  letter.hidden = false;

  window.setTimeout(() => {
    window.location.href = "letter.html";
  }, 700);
});