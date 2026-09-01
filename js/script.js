/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".portfolio-nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector("#mainNavigation");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }

        }

    });

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".education-item, .skill-card, .process-step, .project-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});