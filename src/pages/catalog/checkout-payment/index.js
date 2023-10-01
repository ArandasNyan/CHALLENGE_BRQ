document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões com a classe "btn-rent"
    const rentButtons = document.querySelectorAll(".success");

    // Adiciona um evento de clique a cada botão
    rentButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            // Redireciona para a página de cadastro de cartão
            window.location.href = "../payment-sucess/success.html";
        });
    });
});