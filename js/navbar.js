const mobileButton = document.querySelector("button");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

mobileButton.addEventListener("click", function () {
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

let navUri = window.location?.href.split("/"); // get current url
let currentUri = navUri[navUri.length - 1].split("."); // get current page
let currentUriName = currentUri[0]; // get current page name

menu.querySelectorAll("a").forEach((element) => {
  if (element.id === currentUriName) {
    // if current page name is equal to the name of the page in the menu
    element.classList.remove("text-[#141414]");
    element.classList.add("text-electric-600", "font-semibold"); // add active class to the current page
  } else {
    element.classList.add("text-[#141414]");
    element.classList.remove("text-electric-600", "font-semibold"); // remove active class from the current page
  }
});
// console.log(currentUri[0]);
