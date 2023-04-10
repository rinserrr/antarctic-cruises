fill="currentColor"

width: 35px;
height: 35px;
display: block;
fill: rgb(0, 179, 255);
filter: invert(42%) sepia(63%) saturate(2265%) hue-rotate(164deg) brightness(97%) contrast(107%);

color: rgb(0, 179, 255);
color: #00b3ff;

background-color: transparent;

https://angel-rs.github.io/css-color-filter-generator/


https://codepen.io/sosuke/pen/Pjoqqp
https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991














<a class="footer__logo logo" href="index.html">
	<picture>
	  <img class="footer__logo-svg" src="img/logo/logo-mobile.svg" width="35" height="35" alt="Логотип .">
	</picture>
</a>

.footer__logo {
  width: 35px;
  height: 35px;
  display: block;
  // fill: rgb(0, 179, 255);
  // filter: brightness(0) saturate(100%) invert(65%) sepia(72%) saturate(5635%) hue-rotate(173deg) brightness(109%) contrast(106%);
  // color: #00b3ff;

  filter: brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(1125%) hue-rotate(360deg) brightness(105%) contrast(105%);

  background-color: transparent;
}

// .footer__logo-svg {
//   max-width: 100%;
//   height: auto;
//   display: block;
//   border-style: none;
// }