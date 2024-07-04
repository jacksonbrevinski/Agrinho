document.addEventListener("DOMContentLoaded", function() {
    const tabImagens = document.getElementById("tab-imagens");
    const tabCuidados = document.getElementById("tab-cuidados");
    const secaoImagens = document.getElementById("imagens");
    const secaoCuidados = document.getElementById("cuidados");

    tabImagens.addEventListener("click", function(event) {
        event.preventDefault();
        secaoImagens.style.display = "block";
        secaoCuidados.style.display = "none";
    });

    tabCuidados.addEventListener("click", function(event) {
        event.preventDefault();
        secaoCuidados.style.display = "block";
        secaoImagens.style.display = "none";
    });
});
