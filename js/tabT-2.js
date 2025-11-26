const tabBtn = document.querySelectorAll('.tab-btn > ul > li');
const tabCont = document.querySelectorAll('.tab-cont > div');

tabCont[0].style.display = 'block';
tabCont[1].style.display = 'none';

tabBtn[0].addEventListener('click', (e) => {
  e.preventDefault();
  tabBtn[1].classList.remove('active');
  tabBtn[0].classList.add('active');
  tabCont[0].style.display = 'block';
  tabCont[1].style.display = 'none';
})

tabBtn[1].addEventListener('click', (e) => {
  e.preventDefault();
  tabBtn[0].classList.remove('active');
  tabBtn[1].classList.add('active');
  tabCont[1].style.display = 'block';
  tabCont[0].style.display = 'none';
})