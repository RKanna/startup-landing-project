"use strict";
const navBar = document.getElementById("navBar");
navBar.style.borderBottom = "none";
window.addEventListener("scroll", function () {
  let touchContainer = document.getElementById("heroBox");
  const navBar = document.getElementById("navBar");
  let scrollPosition = window.scrollY;
  let containerTop = touchContainer.offsetTop;
  let containerHeight = touchContainer.offsetHeight;

  if (scrollPosition >= containerTop) {
    navBar.style.borderBottom = "1px solid #dcdddc";
    navBar.style.backgroundColor = "white";
    navBar.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
  } else {
    navBar.style.borderBottom = "none";
    navBar.style.boxShadow = "none";
    navBar.style.backgroundColor = "";
  }
});
