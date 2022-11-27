//////guests section
const prev = document.querySelector(".guests__prev");
const next = document.querySelector(".guests__next");
const guest1 = document.getElementById("guests__item--1");
const guest2 = document.getElementById("guests__item--2");
const guest3 = document.getElementById("guests__item--3");

next.addEventListener("click", () => {
  guest2.style.left = "-50%";
  guest3.style.left = "-50%";
});

prev.addEventListener("click", () => {
  guest2.style.left = "0%";
  guest3.style.left = "0%";
});
