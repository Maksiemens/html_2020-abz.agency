const hamburgerButton = document.querySelector('.js-hamburgerButton');
const sidenav = document.querySelector('.js-sidenav');
const sidenavBody = document.querySelector('.js-sidenavBody');

hamburgerButton.addEventListener('click', (event) => {
  hamburgerButton.classList.add('hamburger--is-active');
  sidenav.classList.add('sidenav--is-active');
  sidenavBody.classList.add('sidenav__body--is-active');
});

sidenav.addEventListener('click', (event) => {
  hamburgerButton.classList.remove('hamburger--is-active');
  sidenav.classList.remove('sidenav--is-active');
  sidenavBody.classList.remove('sidenav__body--is-active');
});

sidenavBody.addEventListener('click', (event) => {
  event.stopPropagation();
});
