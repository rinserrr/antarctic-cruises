/* Toggle Menu */

const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const toggle = document.querySelector('.menu__toggle');
const wrapper = document.querySelector('.wrapper');
let siteNavigation = document.querySelector('.site-navigation');

menu.classList.remove('menu--no-js');
logo.classList.remove('logo-no-js');


function disableScroll() {
  // Get the current page scroll position in the vertical direction
  let scrollTop;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Get the current page scroll position in the horizontal direction
  let scrollLeft;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () { };
}


toggle.addEventListener('click', function () {
  if (menu.classList.contains('menu--closed')) {
    disableScroll();
    document.body.style.overflow = 'hidden';

    wrapper.style.background = 'rgba(0, 43, 102, 0.5)';

    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    logo.classList.add('logo-opened');
  } else {
    enableScroll();
    document.body.style.overflow = 'visible';

    wrapper.style.background = 'none';

    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    logo.classList.remove('logo-opened');
  }
});


siteNavigation.addEventListener('click', (event) => {
  if (event.target && event.target.tagName === 'A' && menu.classList.contains('menu--opened')) {
    // console.log(event.target);

    enableScroll();
    document.body.style.overflow = 'visible';

    wrapper.style.background = 'none';

    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    logo.classList.remove('logo-opened');
  }
});


wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName === 'DIV' && menu.classList.contains('menu--opened')) {
    enableScroll();
    document.body.style.overflow = 'visible';

    wrapper.style.background = 'none';

    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    logo.classList.remove('logo-opened');
  }
});
