const buttonUp = document.querySelector(".button-up");
const buttonDown = document.querySelector(".button-down");
const table = document.querySelector(".img-active");
const women = document.querySelector(".women");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 539) {
    table.style.transform = "scale(1.2)";
    console.log(true);
  } else table.style.transform = "scale(1)";
});

buttonUp.addEventListener("click", () => {
  if (window.innerWidth <= 320) {
    table.style.transform = "translateY(-25px) scale(1.2)";
  } else if (window.innerWidth <= 539) {
    table.style.transform = "translateY(-57px) scale(1.2)";
  } else table.style.transform = "translateY(-57px)";
});

buttonDown.addEventListener("click", () => {
  if (window.innerWidth <= 539) {
    table.style.transform = "translateY(0) scale(1.2)";
  } else table.style.transform = "translateY(0)";
});

women.addEventListener("animationend", () => {
  if (window.innerWidth === 320) {
    women.style.animation = "levitate-sm 2s ease-in-out infinite";
  } else women.style.animation = "levitate 2s ease-in-out infinite";
});
