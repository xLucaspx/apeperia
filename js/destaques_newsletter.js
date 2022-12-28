const btnReceberDestaques = document.querySelector(".destaques__btn");
const newsletter = document.querySelector(".destaques__newsletter");
const btnFecharNewsletter = document.querySelector(".destaques__newsletter__btn-fechar");
const conteudoForaDialog = document.getElementById('conteudo_fora_dialog');

function fechaDialog() {
    newsletter.classList.remove("destaques__newsletter--aberto");
    btnReceberDestaques.focus(); // para o foco não voltar ao topo da página
    conteudoForaDialog.inert = false;
}
// botao só aparece se o javascript estiver habilitado
btnReceberDestaques.style.display = 'block';

// abrir dialog
btnReceberDestaques.onclick = () => {
    newsletter.classList.add("destaques__newsletter--aberto");
    document.getElementById('destaques__newsletter__email').focus();
    conteudoForaDialog.inert = true;
}

btnFecharNewsletter.onclick = fechaDialog;

// fechar dialog com esc
document.addEventListener('keyup', (evento) => {
    if (evento.key === 'Escape') { 
        fechaDialog();
    }
});

// fechar dialog ao clicar fora
document.querySelector('.destaques__newsletter-overlay').onclick = fechaDialog;
