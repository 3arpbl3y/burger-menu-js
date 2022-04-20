const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(" ");
const body = document.body;

hamb.onclick = (e) => {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
};

function renderPopup() {
  popup.append(menu);
}
