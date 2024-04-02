"use strict";
//=================== SHOW MENU ====================
const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav__close");
//========== MENU SHOW ===========
if (navToggle) {
    navToggle.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.add("show-menu");
        }
    });
}
//========= MENU HIDDEN ==========
if (navClose) {
    navClose.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("show-menu");
        }
    });
}
//====================== REMOVE MENU MOBILE =================
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
        navMenu.classList.remove("show-menu");
    }
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
//========================= SHADOW HEADER ========================================
const shadowHeader = () => {
    const header = document.querySelector("header");
    if (header) {
        window.scrollY >= 50
            ? header.classList.add("shadow-header")
            : header.classList.remove("shadow-header");
    }
};
window.addEventListener("scroll", shadowHeader);
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
function sendEmail(e) {
    e.preventDefault();
    emailjs
        .sendForm("service_jlammo7", "template_lqwkcwa", "#contact-form", "LxYe5ulaHK9razvQJ")
        .then(() => {
        contactMessage.textContent = "Mensagem enviada com sucesso ✅";
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 3000);
        contactForm.reset();
    }, () => {
        contactMessage.textContent = "Mensagem não enviada ❌";
    });
}
contactForm.addEventListener("submit", sendEmail);
//========================= SCROLL UP ========================================
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if (scrollUp) {
        window.scrollY >= 350
            ? scrollUp.classList.add("show-scroll")
            : scrollUp.classList.remove("show-scroll");
    }
};
window.addEventListener("scroll", scrollUp);
//========================= SCROLL SECTIONS ACTIVE LINK =================================
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute("id");
        if (sectionId) {
            const sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
            if (sectionClass) {
                if (scrollDown > sectionTop &&
                    scrollDown <= sectionTop + sectionHeight) {
                    sectionClass.classList.add("active-link");
                }
                else {
                    sectionClass.classList.remove("active-link");
                }
            }
        }
    });
};
window.addEventListener("scroll", scrollActive);
//=============================== DARK LIGHT THEME ================================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-foggy-fill";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-foggy-fill";
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"](iconTheme);
}
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
