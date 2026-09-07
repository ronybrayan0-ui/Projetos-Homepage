// portfolio.js - Comportamento da seção portfólio

document.addEventListener("DOMContentLoaded", function () {

  // O efeito de abrir/fechar o texto (.card__text) do card acontece só com
  // hover, resolvido inteiramente em CSS (.card--portfolio:hover .card__text
  // no exercicio-3.css). Não precisa de JavaScript pra isso.
   // ===== ELEMENTOS =====
  const form = document.getElementById("newsletterForm");
  const input = document.getElementById("emailNewsletter");
  const erro = document.getElementById("erroEmail");

  // ===== FUNÇÃO DE VALIDAÇÃO =====
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // ===== EVENTO DE ENVIO =====
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = input.value.trim();

    // VALIDA
    if (email === "" || !validarEmail(email)) {
      erro.classList.add("ativo");
      input.style.borderColor = "var(--red-700)";
      return;
    }

    // Sucesso
    erro.classList.remove("ativo");
    input.style.borderColor = "var(--gray-200)";

    alert("✅ Inscrição realizada com sucesso!");

    // Limpa o campo
    input.value = "";
  });

  // ===== LIMPA ERRO AO DIGITAR =====
  input.addEventListener("input", function () {
    if (erro.classList.contains("ativo")) {
      erro.classList.remove("ativo");
      input.style.borderColor = "var(--gray-200)";
    }
  });

});