/*eslint-disable*/
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
import "./css/styles.css";
import { buildNav } from "./buildNav";
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");
/**
 * End Global Variables
 */
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav & add event listener to each li
buildNav();

// Add class 'your-active-class' to section when near top of viewport
// Add class 'menu__link__active' to Nav li element to highlight the section in the viewport.
let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sections.forEach((section) => {
        section.classList.remove("your-active-class");
      });
      entry.target.classList.add("your-active-class");

      const links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        entry.target.dataset.nav === link.textContent
          ? link.classList.add("menu__link__active")
          : link.classList.remove("menu__link__active");
      });
    }
  });
};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

// Create the observer instance
let observer = new IntersectionObserver(callback, options);

//Observing all sections
sections.forEach((section) => {
  observer.observe(section);
});

// hide the header whenever users stop scrolling
let timer;
function hideWhenScrolling() {
  const header = navBar.parentElement.parentElement;
  clearTimeout(timer);
  header.style.opacity = "1";
  header.style.visibility = "visible";
  timer = setTimeout(() => {
    header.style.opacity = "0";
    header.style.visibility = "hidden";
  }, 2000);
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// listening to scroll event to hide header when scrolling
window.addEventListener("scroll", hideWhenScrolling);
