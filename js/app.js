const t0 = performance.now();

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
const pageHeader = document.querySelector('.page__header');
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let isScrolling;
/**
 * End Global Variables
 *
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
function scrollTO(e) {
  e.preventDefault();
  if (e.target.classList.contains('menu__link')) {
    let section = document.querySelector(e.target.hash);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

// Hide fixed navigation bar while not scrolling
function hideNav() {
  clearTimeout(isScrolling);
  if (pageHeader.classList.contains('hidden')) {
    pageHeader.classList.remove('hidden');
  }
  isScrolling = setTimeout(() => {
    if (window.scrollY < 145) {
      return;
    }
    pageHeader.classList.add('hidden');
  }, 1200);
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navbarList.addEventListener('click', scrollTO);

// Set sections as active
document.addEventListener('scroll', setActive);

// Hide navbar while not scrolling
document.addEventListener('scroll', hideNav);

const t1 = performance.now();
console.log(`App took ${t1 - t0} milliseconds.`);
