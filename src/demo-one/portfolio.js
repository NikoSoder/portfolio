let button = document.querySelector(".button-nav");
let nav = document.querySelector(".home-nav");
let li = document.querySelectorAll(".nav-li");

// hide nav when user clicks nav button
/* button.addEventListener("click", () => {
  nav.classList.toggle("hide-nav");
}); */

// hide nav when user clicks list item
/* li.forEach((liItem) => {
  liItem.addEventListener("click", () => {
    nav.classList.toggle("hide-nav");
  });
}); */

const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const projects = entry.target.querySelector(".projects-container");

    if (entry.isIntersecting) {
      projects.classList.add("projects-animation");
      return;
    }
    projects.classList.remove("projects-animation");
  });
});

const observerSecond = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const about = entry.target.querySelector(".about-container");

    if (entry.isIntersecting) {
      about.classList.add("about-animation");
      return;
    }
    about.classList.remove("about-animation");
  });
});

//const properties = [projectsSection, aboutSection];
observer.observe(projectsSection);
observerSecond.observe(aboutSection);
