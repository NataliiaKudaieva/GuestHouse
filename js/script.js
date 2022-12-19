//////guests section
const prev = document.querySelector(".guests__prev");
const next = document.querySelector(".guests__next");
const guests = document.querySelectorAll(".guests__item");

let offset = 0;

next.addEventListener("click", function () {
  offset = offset + 50;
  if (offset > 70) {
    offset = 0;
  }
  guests.forEach((el) => (el.style.left = -offset + "%"));
});

prev.addEventListener("click", function () {
  offset = offset - 50;
  if (offset < 70) {
    offset = 0;
  }
  guests.forEach((el) => (el.style.left = -offset + "%"));
});
