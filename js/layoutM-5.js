const $menus = document.querySelectorAll('.nav > ul > li');

$menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    const $submenu = menu.querySelector('.submenu');
    $submenu.style.height = '180px';
  })
})

$menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    const $submenu = menu.querySelector('.submenu');
    $submenu.style.height = '0';
  })
})