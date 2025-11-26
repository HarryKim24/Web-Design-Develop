const menus = document.querySelectorAll('ul > li');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.querySelector('.submenu').style.height = '200px';
  })
});

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    menu.querySelector('.submenu').style.height = '0';
  })
});