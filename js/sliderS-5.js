let currnetIndex = 0;
const sliderWrap = document.querySelector('.sliderWrap');

setInterval(() => {
  currnetIndex++;
  sliderWrap.style.marginLeft = -currnetIndex * 100 + '%';
  sliderWrap.style.transition = '1s ease';

  if (currnetIndex == 3) {
    setTimeout(() => {
      sliderWrap.style.marginLeft = '0';
      sliderWrap.style.transition = '0s';
      currnetIndex = 0;
    }, 1000);
  }
}, 1500);