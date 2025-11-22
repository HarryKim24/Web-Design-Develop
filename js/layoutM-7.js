const $menu = document.querySelector('.nav > ul');
const $slider = document.querySelector('#slider');

$menu.addEventListener('mouseover', () => {
  $slider.classList.add('on');
  const $submenus = $menu.querySelectorAll('.nav > ul > li > ul');
  $submenus.forEach(submenu => {
    submenu.style.height = '193px';
  })
})

$menu.addEventListener('mouseout', () => {
  $slider.classList.remove('on');
  const $submenus = $menu.querySelectorAll('.nav > ul > li > ul');
  $submenus.forEach(submenu => {
    submenu.style.height = '0px';
  })
})