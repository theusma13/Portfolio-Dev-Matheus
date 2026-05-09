// MENU SCROLL

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(28, 23, 18, 0.98)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(42, 33, 24, 0.95)";
    header.style.boxShadow = "none";
  }

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
  ".about-card, .project-card, .skill-item, .stat-box"
);

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }

  });

};

revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// SCROLL SUAVE LINKS

const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach((link) => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth"
      });

    }

  });

});


// EFEITO DIGITAÇÃO HERO

const heroTitle = document.querySelector(".hero-content h2");

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let index = 0;

function typeEffect() {

  if (index < originalText.length) {

    heroTitle.innerHTML += originalText.charAt(index);

    index++;

    setTimeout(typeEffect, 25);

  }

}

typeEffect();


// BOTÃO VOLTAR AO TOPO

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.width = "55px";
backToTop.style.height = "55px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#2F4F2F";
backToTop.style.color = "#FFF8EE";
backToTop.style.fontSize = "1.4rem";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.transition = "0.3s";

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// HOVER DINÂMICO NOS CARDS

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-(y - rect.height / 2) / 25}deg)
      rotateY(${(x - rect.width / 2) / 25}deg)
      translateY(-10px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      translateY(0)
    `;

  });

});


// FORMULÁRIO

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Mensagem enviada com sucesso!");

  form.reset();

});