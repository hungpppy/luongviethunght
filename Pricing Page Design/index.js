const accordionItems = document.querySelectorAll(".accordion-item");
const wrapIcons = document.querySelectorAll(".icon");
const btnIcons = document.querySelectorAll(".btn-icon");

accordionItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    btnIcons[i].classList.toggle("fa-plus");
    btnIcons[i].classList.toggle("fa-minus");
    wrapIcons[i].classList.toggle("plus");
  });
});

const toggleBtns = document.querySelectorAll('.toggle-button');
const circle = document.querySelectorAll('.toggle-button .circle');
toggleBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    item.classList.toggle('right');
    circle[i].classList.toggle('right');
  });
});