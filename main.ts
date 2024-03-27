//=================== SHOW MENU ====================
const navMenu: HTMLElement | null = document.getElementById("nav-menu"),
  navToggle: HTMLElement | null = document.getElementById("nav-toggle"),
  navClose: HTMLElement | null = document.getElementById("nav__close");

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
const navLink: NodeList = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu: HTMLElement | null = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.classList.remove("show-menu");
  }
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =================================================================
