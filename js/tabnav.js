// Espera a página carregar antes de rodar o código
document.addEventListener('DOMContentLoaded', () => {
  // Pega todos os botões das abas (Todos / Front-end / Back-end)
  const btns = document.querySelectorAll('.tabs-nav__btn');

  // Para cada botão, adiciona um evento de clique
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove a classe ativa de todos os botões
      btns.forEach((b) => b.classList.remove('ativo'));

      // Adiciona a classe ativa apenas no botão clicado
      btn.classList.add('ativo');
    });
  });
});