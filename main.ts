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

//========================= SHADOW HEADER ========================================
const shadowHeader = () => {
  const header: HTMLElement | null = document.querySelector("header");
  if (header) {
    window.scrollY >= 50
      ? header.classList.add("shadow-header")
      : header.classList.remove("shadow-header");
  }
};
window.addEventListener("scroll", shadowHeader);

//========================= EMAIL JS ========================================
declare var emailjs: any;

const contactForm: HTMLFormElement = document.getElementById(
  "contact-form"
) as HTMLFormElement;
const contactMessage: HTMLElement = document.getElementById(
  "contact-message"
) as HTMLElement;

function sendEmail(e: Event) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_jlammo7",
      "template_lqwkcwa",
      "#contact-form",
      "LxYe5ulaHK9razvQJ"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent ❌";
      }
    );
}

contactForm.addEventListener("submit", sendEmail);
