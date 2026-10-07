const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


/* Mobile Navigation */

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a navigation link */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* Contact Form */

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        return;
    }


    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});