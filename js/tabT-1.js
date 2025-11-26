const tabBtn = document.querySelectorAll('.tab-btn > ul > li');
const tabCont = document.querySelectorAll('.tab-cont > div');

tabCont.forEach(cont => cont.style.display = 'none');
tabCont[0].style.display = 'block';

tabBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    tabBtn.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
      tabCont.forEach(cont => cont.style.display = 'none');
  tabCont[idx].style.display = 'block';
  })
})