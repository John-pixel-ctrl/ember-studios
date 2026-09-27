// EMBER STUDIOS JAVASCRIPT

const studioEmail = "your@email.com";

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// HEADER SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (studioEmail === "your@email.com") {
        alert("Please add your Ember Studios email inside script.js first.");
        return;
    }

    const subject = encodeURIComponent(
        "New Ember Studios Project Enquiry"
    );

    const body = encodeURIComponent(
        "EMBER STUDIOS PROJECT ENQUIRY\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service: " + service + "\n\n" +
        "PROJECT DETAILS:\n" +
        message
    );

    window.location.href =
        "mailto:" +
        studioEmail +
        "?subject=" +
        subject +
        "&body=" +
        body;
});

// CURRENT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// SCROLL REVEAL
const cards = document.querySelectorAll(
    ".game-card, .service-card, .about-points div"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);
});
