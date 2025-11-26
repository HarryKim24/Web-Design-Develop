let currentIndex = 0;
const sliderWrap = document.querySelector('.sliderWrap');

setInterval(() => {
  currentIndex++;
  sliderWrap.style.transform = 'translateY(-' + currentIndex * 100 + '%)';
  sliderWrap.style.transition = '1s ease';

  if (currentIndex == 3) {
    setTimeout(() => {
      sliderWrap.style.transform = 'translateY(0)';
      sliderWrap.style.transition = '0s';
      currentIndex = 0;
    }, 1000);
  }
}, 1500);