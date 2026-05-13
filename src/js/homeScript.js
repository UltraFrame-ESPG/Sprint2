

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const slides = document.querySelectorAll(".slide");
    const body = document.body;
    let slideAtual = 0;

    // Troca os slides
    const intervaloSlides = setInterval(() => {
        slides[slideAtual].classList.remove("ativo");
        slideAtual = (slideAtual + 1) % slides.length;
        slides[slideAtual].classList.add("ativo");
    }, 2000);

    //Finalização do Hero
    setTimeout(() => {
        clearInterval(intervaloSlides);
        hero.classList.add("hero-sumir");
        body.classList.add("mostrar-site");

        setTimeout(() => {
            hero.remove();
        }, 1000);

    }, 5000); // 5 segundos de exibição da intro
});