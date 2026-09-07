// accordion.js - Comportamento do accordion (apenas um item aberto por vez)

// Aguarda o DOM ser Carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

  /*
    Por que usar DOMContentLoaded?
    - Garante que todos os elementos HTML já existem no DOM
    - Evita erros de "elemento não encontrado" ao tentar selecionar
  */

  // 1. Seleciona todos os itens do accordion
  const accordionItems = document.querySelectorAll(".accordion__item");

  // 2. Para cada item, adiciona um listener para o evento "toggle"
  accordionItems.forEach(function (item) {
    /*
      O que é o evento "toggle"?
      - É um evento nativo do <details>
      - É disparado sempre que o elemento abre OU fecha

      O que é a propriedade "open"?
      - É uma propriedade booleana do <details>
      - true = está aberto
      - false = está fechado
    */

    item.addEventListener("toggle", function () {

      // 3. Verifica se o item atual foi ABERTO
      if (item.open) {

        // 4. Percorre todos os itens novamente
        accordionItems.forEach(function (otherItem) {

          // 5. Se for um item DIFERENTE do que foi aberto, fecha
          if (otherItem !== item) {
            otherItem.open = false; // Fecha o item
          }

        });
      
      }

    });

  });

});