// menu-mobile.js - Comportamento do menu mobile

// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", function () {

  // Elementos do menu
  const menu = document.getElementById("menuMobile");
  const overlay = document.getElementById("menuOverlay");
  const btnAbrir = document.querySelector(".header__menu-btn"); // Botão hambúrguer no header
  const btnFechar = document.getElementById("menuClose");

  // ===== FUNÇÕES =====

  // Abre o menu
  function abrirMenu() {
    menu.classList.add("menu-mobile--aberto");
    overlay.classList.add("menu-overlay--ativo");
    document.body.classList.add("no-scroll"); // Impede scroll da página
  }

  // Fecha o Menu
  function fecharMenu() {
    menu.classList.remove("menu-mobile--aberto");
    overlay.classList.remove("menu-overlay--ativo");
    document.body.classList.remove("no-scroll");
  }

  // ===== EVENTOS =====

  // Clica no hambúrguer → abre
  if (btnAbrir) {
    btnAbrir.addEventListener("click", abrirMenu);
  }

  // Clica no X → fecha
  btnFechar.addEventListener("click", fecharMenu);

  // Clica no overlay → fecha
  overlay.addEventListener("click", fecharMenu);

  // Pressiona ESC → fecha
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("menu-mobile--aberto")) {
      fecharMenu();
    }
  });

});