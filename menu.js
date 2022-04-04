const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-button');
const openMenu = document.querySelector('.button');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-nav-menu').style.display = 'none';
  });
});