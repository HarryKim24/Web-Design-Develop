let currentIndex = 0;
const sliderWrap = document.querySelector('.sliderWrap');

setInterval(() => {
  currentIndex++;
  sliderWrap.style.transform = 'translateY(-' + currentIndex * 25 + '%)';
  sliderWrap.style.transition = '1s ease';

  if (currentIndex == 3) {
    setTimeout(() => {
      currentIndex = 0;
      sliderWrap.style.transform = 'translateY(0)';
      sliderWrap.style.transition = '0s';
    }, 1000);
  }
}, 1500)