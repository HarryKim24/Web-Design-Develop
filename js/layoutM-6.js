const $menu = document.querySelector('.nav > ul');
const $submenu = document.querySelector('.nav > ul > li > ul');

$menu.addEventListener('mouseover', () => {
  $menu.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'block';
  })
  document.getElementById('main').classList.add('on');
})

$menu.addEventListener('mouseout', () => {
  $menu.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none';
  })
  document.getElementById('main').classList.remove('on');
})