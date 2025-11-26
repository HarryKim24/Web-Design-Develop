const popupBtn = document.querySelector('.popup-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

popupBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})