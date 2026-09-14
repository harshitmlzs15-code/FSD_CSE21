// Navbar background on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = "#f5ff00";
    } else {
        navbar.style.borderBottomColor = "#242424";
    }

});


// Project hover effect

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {
        project.querySelector(".project-arrow").textContent = "↗";
    });

});


// Current year

const year = new Date().getFullYear();

const footer = document.querySelector("footer div");

if (footer) {
    footer.textContent = `© ${year} HY`;
}