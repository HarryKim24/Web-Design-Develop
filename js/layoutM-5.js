const $mainmenus = document.querySelectorAll('.nav .mainmenu');
const $header = document.querySelector('#header');

$mainmenus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    $header.classList.add('on');
    const $submenus = document.querySelectorAll('.nav .mainmenu > li > .submenu');
    $submenus.forEach(submenu => {
      submenu.style.height = '200px';
    })
  })
})

$mainmenus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    $header.classList.remove('on');
    const $submenus = document.querySelectorAll('.nav .mainmenu > li > .submenu');
    $submenus.forEach(submenu => {
      submenu.style.height = '0px';
    })
  })
})