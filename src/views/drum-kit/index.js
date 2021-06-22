import "./style.css";
const keys = document.querySelectorAll(".key");
document.addEventListener("keydown", function (e) {
  const { keyCode } = e;
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (key) {
    key.classList.add("playing");
    audio.play();
  }
  keys.forEach((item) => {
    item.classList.remove("playing");
    document.addEventListener("transitionend", function () {
      item.classList.remove("playing");
    });
  });
});
