/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


/**
 * Define Global Variables
 *
*/

const allsections = document.querySelectorAll("section")
let navbar = document.querySelector("#navbar__list")

/**
 *function returns which section is in the viewport now which i need to active
 *
*/
function sectioninview() {
  let thesection = allsections[0];
  let leastval = 1000000;
  for (const element of allsections) {
    let bounding = element.getBoundingClientRect();
    if (bounding.top > -400 & bounding.top < leastval) {
      leastval = bounding.top;
      thesection = element;
    };
  };

  return thesection;
}
/**
 * function puts style to the section which i returned and to the list item in the navbar with the heip of   data-nav of li  and id of sections
 *
*/

function Activating() {
  window.addEventListener("scroll", function(event) {
    let activatedsection = sectioninview();
    activatedsection.classList.add("your-active-class");


    for (const element of allsections) {
      if (element.id != activatedsection.id & element.classList.contains("your-active-class")) {
        element.classList.remove("your-active-class");
      }
    }
    let activeli = document.querySelector("li[data-nav=" + activatedsection.id + "]");
    activeli.classList.add("active_header");

    const headers = document.querySelectorAll(".menu__link");
    for (const element of headers) {

      if (element.dataset.nav != activeli.dataset.nav & element.classList.contains("active_header")) {
        element.classList.remove("active_header");
      }
    };
  });
};


/**
 * function adds li to ul in the navbar automatically depending on sections in the page
 *
*/

function addheads() {
  for (const element of allsections) {
    let head = document.createElement("li");
    head.className = "navbar__menu menu__link";
    head.dataset.nav = element.id;
    head.innerText = element.dataset.nav;
    navbar.appendChild(head);
  };
};
/**
 * function puts click listener to the navbar to scroll to the sections
 *
*/
function clickonheads() {
  navbar.addEventListener("click", function(event) {
    let chosensection = document.querySelector("#" + event.target.dataset.nav)
    chosensection.scrollIntoView();
  });
};

/**
 * calling the functions
 *
*/
clickonheads()
addheads()
Activating();
