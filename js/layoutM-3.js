const $menu = document.querySelectorAll('.nav > ul > li');
const $header = document.querySelector('#header');
const $submenus = document.querySelectorAll('.nav .submenu');

$menu.forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    $header.classList.add('on');
  });

  menuItem.addEventListener('mouseout', () => {
    $header.classList.remove('on');
  });
});