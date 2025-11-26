let currentIndex = 0;
let sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  slider.style.opacity = '0';
})
sliders[0].style.opacity = '1';

setInterval(() => {
  let nextIndex = (currentIndex + 1) % 3;
  sliders[currentIndex].style.opacity = '0';
  sliders[nextIndex].style.opacity = '1';
  currentIndex = nextIndex;
}, 1500);