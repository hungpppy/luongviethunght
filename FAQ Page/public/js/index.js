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
