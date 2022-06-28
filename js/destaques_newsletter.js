let btnReceberDestaques = document.querySelector(".destaques__btn");
let newsletter = document.querySelector(".destaques__newsletter");
let btnFecharNewsletter = document.querySelector(".destaques__newsletter__btn-fechar");

btnReceberDestaques.onclick = function() {
    newsletter.classList.add("destaques__newsletter--aberto");
}

btnFecharNewsletter.onclick = function() {
    newsletter.classList.remove("destaques__newsletter--aberto");
}