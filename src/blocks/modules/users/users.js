const formatedCardsPhone = [...document.querySelectorAll('.js-cardPhone')].map(
  (item) =>
    (item.textContent = item.textContent.replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      '$1 $2 $3 $4 $5'
    ))
);

function isEllipsisActive(element) {
  console.log(element.offsetWidth);
  console.log(element.scrollWidth);
  return element.offsetWidth < element.scrollWidth;
}

document.querySelectorAll('.js-cardMail').forEach((element) => {
  if (isEllipsisActive(element)) {
    element.dataset.tooltipText = element.innerText;
    element.classList.add('active-tooltip');
  } else {
    element.removeAttribute('data-tooltip-text');
    element.classList.remove('add-tooltip');
  }
});
