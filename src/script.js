let sub_divs = document.querySelectorAll(".sub-div");
let first_letter = document.querySelectorAll(".first-letter");
let mainDiv = document.getElementById("main");

let animateFunc = () => {
  let width = [0, 0, 0];
  for (let i = 0; i < sub_divs.length; i++) {
    const element = sub_divs[i];
    width[i] = element.offsetWidth;
    element.style.width = `${first_letter[i].offsetWidth}px`;
    main.addEventListener("mouseover", () => {
      element.style.width = `${width[i]}px`;
      element.style.borderRight = "1px solid black";
    });
    main.addEventListener("mouseleave", () => {
      element.style.width = `${first_letter[i].offsetWidth}px`;
      element.style.borderRight = "none";
    });
  }
};

window.addEventListener("resize", animateFunc);

window.addEventListener("load", animateFunc);

