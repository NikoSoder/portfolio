let button = document.querySelector(".button-nav");
let nav = document.querySelector(".home-nav");
let li = document.querySelectorAll(".nav-li");

// hide nav when user clicks nav button
button.addEventListener("click", () => {
    nav.classList.toggle("hide-nav");
})

// hide nav when user clicks list item
li.forEach(liItem => {
    liItem.addEventListener('click', () => {
        nav.classList.toggle("hide-nav");
    })
});
