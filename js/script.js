//////guests section
const prev = document.querySelector(".guests__prev");
const next = document.querySelector(".guests__next");
const guests = document.querySelectorAll(".guests__item");
const guest1 = document.getElementById("guests__item--1");
const guest2 = document.getElementById("guests__item--2");
const guest3 = document.getElementById("guests__item--3");

function stopAnimation() {
  guests.forEach((list) => list.classList.add("paused"));
}
window.addEventListener("click", stopAnimation);

next.addEventListener("click", () => {
  guest1.style.transform = "translateX(0px)";
  guest2.style.transform = "translateX(-70%)";
  guest3.style.transform = "translateX(-50%)";
});

prev.addEventListener("click", () => {
  guest2.style.transform = "translateX(0px)";
  guest3.style.transform = "translateX(0px)";
});
