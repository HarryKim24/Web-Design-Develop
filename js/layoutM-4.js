const $menus = document.querySelectorAll('.nav > ul > li');

$menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.querySelector('.submenu').style.height = '180px';
  })
})

$menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    menu.querySelector('.submenu').style.height = '0px';
  })
})