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
