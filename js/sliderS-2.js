let currnetIndex = 0;
const $slideWrap = document.querySelector('.sliderWrap');
const $sliderCone = $slideWrap.firstElementChild.cloneNode(true);
$slideWrap.appendChild($sliderCone);

setInterval(() => {
  currnetIndex++;
  $slideWrap.style.marginLeft = -currnetIndex * 100 + '%';
  $slideWrap.style.transition = '1s ease';

  if (currnetIndex == 3) {
    setTimeout(() => {
      $slideWrap.style.transition = '0s';
      $slideWrap.style.marginLeft = '0';
      currnetIndex = 0;
    }, 1000);
  }
}, 1500);