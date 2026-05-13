document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const slides = document.querySelectorAll(".slide");
    const body = document.body;
    let slideAtual = 0;

    // 1. Lógica de troca de slides (rápida para dar tempo de ver os dois)
    const intervaloSlides = setInterval(() => {
        slides[slideAtual].classList.remove("ativo");
        slideAtual = (slideAtual + 1) % slides.length;
        slides[slideAtual].classList.add("ativo");
    }, 2000);

    // 2. O MOMENTO DE SUMIR
    setTimeout(() => {
        // Para de trocar os slides
        clearInterval(intervaloSlides);
        
        // Faz a Hero sumir suavemente
        hero.classList.add("hero-sumir");
        
        // Mostra o site real
        body.classList.add("mostrar-site");

        // Opcional: Remove do HTML após 1s para não pesar
        setTimeout(() => {
            hero.remove();
        }, 1000);

    }, 5000); // 5000ms = 5 segundos de exibição da intro
});