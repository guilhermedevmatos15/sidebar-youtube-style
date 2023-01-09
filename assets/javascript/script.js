const iconMenu = document.querySelector('i.fa-bars');
const iconClose = document.querySelector('i.fa-xmark');
const sideBar = document.querySelector('div.side-bar');
const pLorem = document.querySelector('p.lorem');

iconMenu.addEventListener('click', ()=>{
   iconMenu.classList.remove('active');
   iconClose.classList.add('active');
   sideBar.classList.add('show');
});

iconClose.addEventListener('click', ()=>{
   iconMenu.classList.add('active');
   iconClose.classList.remove('active');
   sideBar.classList.remove('show');
});

pLorem.addEventListener('click', ()=>{
   if (iconClose.classList[2] === 'active' && sideBar.classList[1] === 'show') {
      iconMenu.classList.add('active');
      iconClose.classList.remove('active');
      sideBar.classList.remove('show');
   }
});