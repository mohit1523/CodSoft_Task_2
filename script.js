// CODE FOR MKP HEADING
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

window.addEventListener("load", () => {
  animateFunc();
  let url = window.location.href;
  let hashPos = url.indexOf('#') + 1;
  let hashStr = url.substring(hashPos);
  if(hashStr === 'top'){
    hashStr = 'home';
  }
  hashStr += '-link';
  document.getElementById(hashStr).style.backgroundColor = "var(--accent-color)";
});

// CODE FOR NAVBAR

let navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((element) => {
  element.addEventListener("click", (e) => {

    navLinks.forEach((elem) => {
      // if(element.innerHTML === 'Home'){
      //   elem.style.backgroundColor = "transparent";
      // }
      // else 
      if (elem === e.target) {
        elem.style.backgroundColor = "var(--accent-color)";
      }
       else {
        elem.style.backgroundColor = "var(--secondary-color)";
      }
    });

  });

});
