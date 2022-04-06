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

const projectname = document.querySelector('.projectname');
const workSections = document.querySelector('.project-section');
const modal = document.querySelector('.modal-example');
const modalImg = document.querySelector('.modal-img');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshoot-Portfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshoot-Portfolio-(1).svg',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: 'images/Snapshoot-Portfolio-(2).svg',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='projects'>
          <div class='img-web'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='' />
          </div>
          <div class='project-description'>
            <h1 class='title'>${projectsList[i].name}</h1>
            <div class='role'>
              <div class="role-name">${projectsList[i].company}</div>
                <div class="role-dot"></div>
                <div class="role-job">${projectsList[i].role}</div>
                <div class="role-dot"></div>
                <div class="role-year">${projectsList[i].year}</div>
            </div>
            <div class='project-details'>
              <p>
                ${projectsList[i].description}
              </p>
              <ul class='skills'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
    </div>
  `;
}

for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    projectname.innerHTML = projectsList[i].name;
    modalImg.src = projectsList[i].imageLink;
    company.innerHTML = projectsList[i].company;
    role.innerHTML = projectsList[i].role;
    year.innerHTML = projectsList[i].year;

    document.querySelector('.project-section').classList.add('blur');
    document.querySelector('.fixed-navbar').classList.add('blur');
    document.querySelector('.page').classList.add('blur');
    document.querySelector('.about').classList.add('blur');
    document.querySelector('.contact-section').classList.add('blur');
    modal.classList.add('show');
  });
}
  document.querySelector('.closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
  window.location.reload();
  document.querySelector('.header').classList.remove('blur');
  document.querySelector('.showcase').classList.remove('blur');
});