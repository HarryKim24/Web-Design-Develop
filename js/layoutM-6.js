const menus = document.querySelectorAll('.nav > ul > li');
const main = document.querySelector('#main');
const submenus = document.querySelectorAll('.submenu');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    main.classList.add('on');
    submenus.forEach(submenu => {
      submenu.style.display = 'block';
    })
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    main.classList.remove('on');
    submenus.forEach(submenu => {
      submenu.style.display = 'none';
    })
  })
})