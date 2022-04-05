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

const projectsPopup = [
  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'images/Snapshoot-Portfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://hammadsiddique.github.io/My-Portfolio/',
    sourceLink: 'https://github.com/HammadSiddique/My-Portfolio',
},

  {
    name: 'Multi-post stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'images/Snapshoot-Portfolio(1).svg',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://hammadsiddique.github.io/My-Portfolio/',
    sourceLink: 'https://github.com/HammadSiddique/My-Portfolio',
},

  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'images/Snapshoot-Portfolio(2).svg',
    technologies: ['html', 'css', 'javascript'],
    livelink: 'https://hammadsiddique.github.io/My-Portfolio/',
    sourceLink: 'https://github.com/HammadSiddique/My-Portfolio',
},
];

const projectCards = document.querySelector('.project-cards .cards');

for (let i = 0; i < projectsPopup.length; i += 1){
  const mainCard = document.createElement('div');
  mainCard.classList.add('card');
  projectCards.append(mainCard);

  const projectName = document.createElement('h3');
  projectName.textContent = projectsPopup[i].name;
  projectCards.append(projectName)

  const projectImg = document.createElement ('img');
  projectImg.setAttribute('src', projectsPopup[i].image);
  mainCard.append(projectImg);

  const projectContent = document.createElement('div');
  projectContent.classList.add('content');
  projectCards.append(projectContent);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = projectsPopup[i].description;
  projectContent.append(projectDescription);

  const projectButton = document.createElement('button');
  projectButton.textContent='See Project';
  projectContent.append(projectButton);

  projectButton.addEventListener('click', () => {
    if (window.screen.width < 768) {
      const mobileProjectPopupWindow = document.querySelector('.mobile-project-popup-window');
      const mobileProjectPopupWindowImage = document.querySelector('.mobile-project-popup-window img ');
      const mobileProjectPopupWindowName = document.querySelector('.mobile-project-popup-window h3');
      const mobileProjectPopupWindowTechnologies = document.querySelector('.mobile-project-popup-window ul');
      const mobileProjectPopupWindowDescription = document.querySelector('.mobile-project-popup-window .description');
      const mobileProjectPopupWindowSeeLive = document.querySelector('.mobile-project-popup-window .see-live');
      const mobileProjectPopupWindowSeeSource = document.querySelector('.mobile-project-popup-window .see-source');
      const mobileProjectPopupWindowCloseBtn = document.querySelector('.mobile-project-popup-window .close-popup-window');

      mobileProjectPopupWindowImage.src = projectCards[i].image;
      mobileProjectPopupWindowName.textContent = projectCards[i].name;
      mobileProjectPopupWindowTechnologies.innerHTML = '';
      mobileProjectPopupWindowDescription.textContent = projectCards[i].description;
      mobileProjectPopupWindowSeeLive.href = projectCards[i].livelink;
      mobileProjectPopupWindowSeeSource.href = projectCards[i].sourceLink;
      mobileProjectPopupWindow.classList.remove('display-none');
      mobileProjectPopupWindowCloseBtn.addEventListener('click', () => {
        mobileProjectPopupWindow.classList.add('display-none');
        document.querySelector('body').style.overflow = 'scroll';
      });
    } else {
      const desktopProjectPopupWindow = document.querySelector('.desktop-project-popup-window');
      const desktopProjectPopupWindowImage = document.querySelector('.desktop-project-popup-window img');
      const desktopProjectPopupWindowName = document.querySelector('.desktop-project-popup-window h3');
      const desktopProjectPopupWindowTechnologies = document.querySelector('.desktop-project-popup-window ul');
      const desktopProjectPopupWindowDescription = document.querySelector('.desktop-project-popup-window .description');
      const desktopProjectPopupWindowSeeLive = document.querySelector('.desktop-project-popup-window .see-live');
      const desktopProjectPopupWindowSeeSource = document.querySelector('.desktop-project-popup-window .see-source');
      const desktopProjectPopupWindowCloseBtn = document.querySelector('.desktop-project-popup-window .close-popup-window');

      desktopProjectPopupWindowImage.src = projectCards[i].image;
      desktopProjectPopupWindowName.textContent = projectCards[i].name;
      desktopProjectPopupWindowTechnologies.innerHTML = '';
      desktopProjectPopupWindowDescription.textContent = projectCards[i].description;
      desktopProjectPopupWindowSeeLive.href = projectCards[i].livelink;
      desktopProjectPopupWindowSeeSource.href = projectCards[i].sourceLink;
      desktopProjectPopupWindow.classList.remove('desktop-display-none');
      desktopProjectPopupWindowCloseBtn.addEventListener('click', () => {
        desktopProjectPopupWindow.classList.add('desktop-display-none');
        document.querySelector('body').style.overflow = 'scroll';
      });
    }
    document.querySelector('body').style.overflow = 'hidden';
}