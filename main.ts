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

//=============================== DARK LIGHT THEME ================================
const themeButton = document.getElementById("theme-button") as HTMLElement;
const darkTheme: string = "dark-theme";
const iconTheme: string = "ri-sun-foggy-fill";

const selectedTheme: string | null = localStorage.getItem("selected-theme");
const selectedIcon: string | null = localStorage.getItem("selected-icon");

const getCurrentTheme = (): string =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = (): string =>
  themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-foggy-fill";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"
  ](iconTheme);
}

themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//======================TRANSLATOR =============================
// Suponha que temos duas divs com os ids 'div1' e 'div2'
// var buttonTranslator: HTMLElement | null =
//   document.getElementById("translator");
// var ptBr: HTMLCollection = document.getElementsByClassName("Pt-br");
// var en: HTMLCollection = document.getElementsByClassName("En");
// ==========================================
// Encontre o elemento <i> pelo seu seletor
// const buttonTranslator = document.querySelector("#translator") as HTMLElement;

// // Adicione um ouvinte de eventos de clique ao ícone
// buttonTranslator.addEventListener("click", () => {
//   // Encontre os elementos com as classes desejadas
//   const En = document.querySelector("En") as HTMLElement;
//   const PtBr = document.querySelector(".Pt-Br") as HTMLElement;

//   // Verifique se os elementos foram encontrados
//   if (En && PtBr) {
//     // Oculte a classe En e mostre a classe PtBr
//     En.style.display = "none";
//     PtBr.style.display = "block";
//   }
// });

// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Coloque o código aqui para garantir que seja executado apenas após o carregamento do DOM
  const icon = document.querySelector("#translator") as HTMLElement;
  if (icon) {
    icon.addEventListener("click", () => {
      const desaparecer = document.querySelector(".En") as HTMLElement;
      const aparecer = document.querySelector(".Pt-br") as HTMLElement;
      if (desaparecer && aparecer) {
        desaparecer.style.display = "none";
        aparecer.style.display = "block";
      }
    });
  }
});
