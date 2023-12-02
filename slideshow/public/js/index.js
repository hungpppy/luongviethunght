const parent = document.querySelector(".carousel-wrap");
const children = [...document.querySelectorAll(".carousel-item")];
const indicator = document.querySelectorAll(".indicator-item");
const carouselWrap = document.getElementById("carousel-wrap");

if (children.length % 2 == 0) {
  const currentMarginLeft = parseFloat(carouselWrap.style.marginLeft) | 0;
  carouselWrap.style.marginLeft = currentMarginLeft + 16 + "%";
}

function updateParentWidth() {
  const childCount = children.length;
  const parentWidth = 31 * childCount + 1 * (childCount - 1);
  parent.style.width = parentWidth + "%";
}
updateParentWidth();

const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

prevBtn.addEventListener("click", () => {
  let index = -1;
  children.forEach((item, i) => {
    if (item.classList.contains("active") && i != 0) {
      item.classList.remove("active");
      indicator[i].classList.remove("active");
      index = i;
    }
  });
  if (index > 0) {
    children[index - 1].classList.add("active");
    indicator[index - 1].classList.add("active");
    const currentMarginLeft = parseFloat(carouselWrap.style.marginLeft) | 0;
    carouselWrap.style.marginLeft = currentMarginLeft + 32 + "%";
  }
});

nextBtn.addEventListener("click", () => {
  let index = -1;
  children.forEach((item, i) => {
    if (item.classList.contains("active") && i != children.length - 1) {
      item.classList.remove("active");
      indicator[i].classList.remove("active");
      index = i;
    }
  });
  if (index >= 0 && index != children.length - 1) {
    children[index + 1].classList.add("active");
    indicator[index + 1].classList.add("active");
    const currentMarginLeft = parseFloat(carouselWrap.style.marginLeft) | 0;
    carouselWrap.style.marginLeft = currentMarginLeft - 32 + "%";
  }
});

indicator.forEach((item, i) => {
  item.addEventListener("click", () => {
    const currentActive = children.findIndex((e) =>
      e.classList.contains("active")
    );
    indicator[currentActive].classList.remove("active");
    children[currentActive].classList.remove("active");
    children[i].classList.add("active");
    item.classList.add("active");
    const currentMarginLeft = parseFloat(carouselWrap.style.marginLeft) | 0;
    carouselWrap.style.marginLeft =
      currentMarginLeft + (currentActive - i) * 32 + "%";
  });
});

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

