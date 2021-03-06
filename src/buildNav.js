/*eslint-disable*/
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");
 
export function buildNav() {
  let fragment = new DocumentFragment();
  sections.forEach((section) => {
    const sectionName = section.dataset.nav;
    const li = document.createElement("li");
    li.setAttribute("class", "menu__link");
    const anchor = document.createElement("a");
    anchor.href = "#" + section.id;
    anchor.textContent = sectionName;
    li.appendChild(anchor);
    li.addEventListener("click", scrollToSection.bind(null, section));
    fragment.appendChild(li);
  });
  navBar.appendChild(fragment);
}
// scroll to section when li is clicked
function scrollToSection(element, event) {
  event.preventDefault();
  element.scrollIntoView({ behavior: "smooth" });
}