export function configurarNavbar() {
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
}

export function configurarHeader() {
    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
        window.scrollY >= 25 ? header.classList.add("active")
            : header.classList.remove("active");
    });
}

export function atualizarAno() {
    const elementoAnoAtual = document.querySelector(".copyright");
    const anoAtual = new Date().getFullYear();

    elementoAnoAtual.innerHTML = `&copy; ${anoAtual} <a href="#">Easy Carros</a>. Todos os direitos reservados`;
}

export function itemInativo() {
    const elementosInativos = document.querySelectorAll('.inactive');

    // Itere sobre os elementos e modifique o estilo CSS diretamente com !important
    elementosInativos.forEach((elemento) => {
        elemento.addEventListener('mouseover', () => {
            elemento.title = 'Item indisponível'
            elemento.style.setProperty('color', 'hsl(329, 63%, 52%)', 'important'); // Vermelho suave
        });
        
        elemento.addEventListener('mouseout', () => {
            elemento.style.setProperty('color', 'hsl(219, 21%, 39%)', 'important');
        });
    });
}