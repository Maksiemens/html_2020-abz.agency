const alert = document.querySelector('.js-alert');
const alertCloseButton = document.querySelector('.js-alertCloseButton');
const alertConfirmButton = document.querySelector('.js-alertConfirmButton');
const alertShowButton = document.querySelector('.js-alertShowButton');

alertShowButton.addEventListener('click', (event) => {
  alert.classList.add('show-alert');
});

alertCloseButton.addEventListener('click', (event) => {
  alert.classList.remove('show-alert');
});

alertConfirmButton.addEventListener('click', (event) => {
  alert.classList.remove('show-alert');
});
