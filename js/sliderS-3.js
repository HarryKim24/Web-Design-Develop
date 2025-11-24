let currnetIndex = 0;
const $sliderWrap = document.querySelector('.sliderWrap');

setInterval(() => {
  currnetIndex++;
  $sliderWrap.style.marginTop = -currnetIndex * 300 + 'px';
  $sliderWrap.style.transition = '1s ease';

  if (currnetIndex == 3) {
    setTimeout(() => {
      currnetIndex = 0;
      $sliderWrap.style.marginTop = '0';
      $sliderWrap.style.transition = '0s';
    }, 1000);
  }
}, 1500);