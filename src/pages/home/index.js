'use strict';

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navToggleFunc);
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 25 ? header.classList.add("active")
        : header.classList.remove("active");
});

/**
 * Current Year For update
 */

function atualizarAno() {
    const elementoAnoAtual = document.querySelector(".copyright");
    const anoAtual = new Date().getFullYear();
    elementoAnoAtual.innerHTML = `&copy; ${anoAtual} <a href="#">Easy Carros</a>. Todos os direitos reservados`;
}

// Chama a função para exibir o ano atual
atualizarAno();

// Configura um intervalo para atualizar o ano a cada segundo (opcional)
setInterval(atualizarAno, 1000);