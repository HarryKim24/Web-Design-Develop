const $menus = document.querySelectorAll('.nav > ul');
const $header = document.querySelector('#header');

$menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    $header.classList.add('on');
    const $submenus = document.querySelectorAll('.nav > ul > li > .submenu');
    $submenus.forEach(submenu => {
      submenu.style.height = '180px';
    })
  })
})

$menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    $header.classList.remove('on');
    const $submenus = document.querySelectorAll('.nav > ul > li > .submenu');
    $submenus.forEach(submenu => {
      submenu.style.height = '0px';
    })
  })
})