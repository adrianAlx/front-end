'use strict';

const accordion = document.querySelector('.accordion');
const itemHead = document.querySelector('.item-head');

accordion.addEventListener('click', e => {
  const clicked = e.target.closest('.item-head');

  if (!clicked) return;

  clicked.parentElement.classList.toggle('open');

  document
    .querySelector(`.icon--${+clicked.parentElement.dataset.item}`)
    .classList.toggle('icon-rotate');
});
