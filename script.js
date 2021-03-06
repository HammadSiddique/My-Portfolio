const mainMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-button");
const openMenu = document.querySelector(".button");

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

document.querySelectorAll(".pop-nav").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-nav-menu").style.display = "none";
  });
});

const projectname = document.querySelector(".projectname");
const workSections = document.querySelector(".project-section");
const modal = document.querySelector(".modal-example");
const modalImg = document.querySelector(".modal-img");
const company = document.querySelector(".company");
const role = document.querySelector(".role");
const year = document.querySelector(".year");

const projectsList = [
  {
    id: 1,
    name: "Music Fest",
    description:
      "This website is about a Music fest. On this website you can find all the details you need about the event.",
    imageLink: "images/mockup.jpg",
    technologies: ["html", "css", "javascript"],
    role: "UI designer",
    company: "Github",
    year: "2022",
    sourceLink: "https://github.com/HammadSiddique/Music-fest",
    demoLink: "https://hammadsiddique.github.io/Music-fest/",
  },
  {
    id: 2,
    name: "Multi-post stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imageLink: "images/Snapshoot-Portfolio-(1).svg",
    technologies: ["html", "css", "javascript"],
    role: "Full Stack Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "#",
    demoLink: "#",
  },
  {
    id: 3,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. ",
    imageLink: "images/Snapshoot-Portfolio-(2).svg",
    technologies: ["html", "css", "javascript"],
    role: "Back end Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "#",
    demoLink: "#",
  },
];

workSections.innerHTML = "";
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = "";
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='projects'>
          <div class='card-image'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='img${projectsList[i].id}' />
          </div>
          <div class='card-content' id='content${projectsList[i].id}'>
            <h3 class='project-name'>${projectsList[i].name}</h3>
            <div class='key-text'>
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
              <ul class='language-container'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='see-project btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
    </div>
  `;
}

for (let i = 0; i < projectsList.length; i += 1) {
  document
    .querySelector(`.project-modal-${i}`)
    .addEventListener("click", () => {
      projectname.innerHTML = projectsList[i].name;
      modalImg.src = projectsList[i].imageLink;
      company.innerHTML = projectsList[i].company;
      role.innerHTML = projectsList[i].role;
      year.innerHTML = projectsList[i].year;

      document.querySelector(".project-section").classList.add("blur");
      document.querySelector(".fixed-navbar").classList.add("blur");
      document.querySelector(".page").classList.add("blur");
      document.querySelector(".about").classList.add("blur");
      document.querySelector(".contact-section").classList.add("blur");
      modal.classList.add("show");
    });
}
document.querySelector(".closeModal").addEventListener("click", () => {
  modal.style.display = "none";
  window.location.reload();
  document.querySelector(".header").classList.remove("blur");
  document.querySelector(".showcase").classList.remove("blur");
});

const email = document.querySelector("#email");
const errorMessage = document.querySelector(".form-submission-error");
const contactFrom = document.querySelector(".contact-form");

contactFrom.addEventListener("submit", (event) => {
  const regex = /[A-Z]/;
  const emailText = email.value;
  if (regex.test(emailText)) {
    errorMessage.innerHTML = "Email address must be in lowercase letters";
    event.preventDefault();
  }
});

const storeName = document.querySelector("#name");
const storeEmail = document.querySelector("#email");
const storeMesssage = document.querySelector("#message");

contactFrom.addEventListener("input", () => {
  const storeData = {
    name: storeName.value,
    email: storeEmail.value,
    message: storeMesssage.value,
  };
  localStorage.setItem("storeData", JSON.stringify(storeData));
});

const userData = JSON.parse(localStorage.getItem("storeData"));

storeName.value = userData.name;
storeEmail.value = userData.email;
storeMesssage.value = userData.message;
