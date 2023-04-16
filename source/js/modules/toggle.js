/* Toggle Menu */

const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const toggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--no-js');
logo.classList.remove('logo-no-js');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    logo.classList.add('logo-opened');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    logo.classList.remove('logo-opened');
  }
});
