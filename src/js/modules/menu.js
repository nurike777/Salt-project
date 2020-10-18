const menuToggle = document.querySelector('.menu-icon');
const menuLine = document.querySelector('.menu-icon__line');
const menu = document.querySelector('.topbar__wrap');
const ua = navigator.userAgent,
      event = (ua.match(/iPad/i) || ua.match(/iPhone/)) ? "touchstart" : "click";

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuLine.classList.toggle('menu-icon__line-active');
    menu.classList.toggle('is-open');
    document.body.classList.toggle('is-locked');
  });
}

window.addEventListener(event, event => {
  if (event.target == menu) {
    menuLine.classList.remove('menu-icon__line-active');
    menu.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  }
});