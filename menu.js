const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-button');
const openMenu = document.querySelector('.button');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}