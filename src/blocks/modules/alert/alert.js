const alertOverlay = document.querySelector('.js-alertOverlay');
const alert = document.querySelector('.js-alert');
const alertCloseButton = document.querySelector('.js-alertCloseButton');
const alertConfirmButton = document.querySelector('.js-alertConfirmButton');
const alertShowButton = document.querySelector('.js-alertShowButton');

alertOverlay.addEventListener('click', (event) => {
  alertOverlay.classList.remove('show-alert');
});

alert.addEventListener('click', (event) => {
  event.stopPropagation();
});

alertShowButton.addEventListener('click', (event) => {
  alertOverlay.classList.add('show-alert');
});

alertCloseButton.addEventListener('click', (event) => {
  alertOverlay.classList.remove('show-alert');
});

alertConfirmButton.addEventListener('click', (event) => {
  alertOverlay.classList.remove('show-alert');
});
