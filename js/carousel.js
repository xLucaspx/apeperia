var btns = document.querySelectorAll(".artigos__slider-item");

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
    
        // Remove classe 'ativo' dos outros botoes
        btns.forEach(function(btnRemoveClass) {
            btnRemoveClass.classList.remove("artigos__slider-item--ativo");
        });

        this.classList.add("artigos__slider-item--ativo");
    });
});