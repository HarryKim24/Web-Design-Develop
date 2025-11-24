let currnetIndex = 0;
const $sliderWrap = document.querySelector('.sliderWrap');

setInterval(() => {
  currnetIndex++;
  $sliderWrap.style.marginTop = -currnetIndex * 25 + '%';
  $sliderWrap.style.transition = '1s ease';

  if (currnetIndex == 3) {
    setTimeout(() => {
      $sliderWrap.style.transition = '0s';
      $sliderWrap.style.marginTop = '0';
      currnetIndex = 0;
    }, 1000);
  }
}, 1500);