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
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  for (const el of sections) {
    const listElement = `<li data-link=${el.id}><a class='menu__link' href="#${el.id}">${el.dataset.nav}</li>`;
    navbarList.insertAdjacentHTML('beforeend', listElement);
  }
}

// Add class 'active' to section when near top of viewport

function setActive() {
  let fromTop = window.scrollY + 250;
  const navLinks = document.querySelectorAll(
    '.navbar__menu #navbar__list li a'
  );

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active__link');
      section.classList.add('your-active-class');
    } else {
      link.classList.remove('active__link');
      section.classList.remove('your-active-class');
    }
  });
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', setActive);
