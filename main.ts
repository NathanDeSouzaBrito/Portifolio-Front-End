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

//========================= SCROLL UP ========================================
const scrollUp = () => {
  const scrollUp: HTMLElement | null = document.getElementById("scroll-up");
  if (scrollUp) {
    window.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

//========================= SCROLL SECTIONS ACTIVE LINK =================================
const sections: NodeListOf<HTMLElement> =
  document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown: number = window.scrollY;

  sections.forEach((current: HTMLElement) => {
    const sectionHeight: number = current.offsetHeight,
      sectionTop: number = current.offsetTop - 58,
      sectionId: string | null = current.getAttribute("id");

    if (sectionId) {
      const sectionClass: HTMLElement | null = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

      if (sectionClass) {
        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionClass.classList.add("active-link");
        } else {
          sectionClass.classList.remove("active-link");
        }
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);
