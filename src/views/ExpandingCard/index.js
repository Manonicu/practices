import "./index.css";
const $cards = document.querySelector(".cards");
$cards.addEventListener(
  "click",
  (e) => {
    e.stopImmediatePropagation();
    document
      .querySelectorAll(".card")
      .forEach((el) => el.classList.remove("active"));
    e.target.offsetParent.classList.add("active");
  },
  false
);
