const buttons = document.querySelectorAll(".artigos__slider-item");

// Indicador de slide atual
const indicador = document.createElement('span');
indicador.classList.add('hidden');
indicador.id = 'indicador-slide';
indicador.textContent = 'slide atual';

// Mostrando primeiro artigo
document.getElementById('artigo1').style.display = 'block';

// Percorre todos os botoes controladores
buttons.forEach(button => {
    button.onclick = () => {
        // button.href = 'javascript:void(0)';

        // Remove classe 'ativo' e o indicador dos outros botões
        buttons.forEach(button => button.classList.remove('artigos__slider-item--ativo'));
        document.getElementById('indicador-slide').remove();

        // Adiciona a classe 'ativo' e o indicador no botão clicado
        button.classList.add('artigos__slider-item--ativo');
        button.append(indicador);

        // Verifica o artigo correspondente ao botao clicado e esconde os outros
        document.querySelectorAll('.artigos__item').forEach(artigo => {
            if (artigo.getAttribute('data-artigo') == button.getAttribute('data-sliderItem')) {
                artigo.style.display = 'block';
            } else {
                artigo.style.display = 'none';
            }
        });
    }
});
