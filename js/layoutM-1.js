const $menu = document.querySelectorAll('.nav > ul > li');

$menu.forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    menuItem.querySelector('.submenu').style.height = '155px';
  })

  menuItem.addEventListener('mouseout', () => {
    menuItem.querySelector('.submenu').style.height = '0px';
  })
})