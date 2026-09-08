# Studio Academy — Landing Page Responsiva

Landing page responsiva de uma plataforma fictícia de ensino de
desenvolvimento web, construída com **HTML5, CSS3 e JavaScript puro**
(sem frameworks ou bibliotecas), a partir de um layout desenhado
previamente no Figma.

🔗 **Demo ao vivo:** [https://ronybrayan0-ui.github.io/Projetos-Homepage/]

🎨 **Protótipo do Figma:** [https://www.figma.com/design/Mqlj7VivMNEgK7KsmLaVJN/🔥-Challenge---Studio-Academy?node-id=13505-1710&p=f&t=PA4onzC1xpUUDsmQ-0]
(Codifiquei com base no layout do Figma).

## Sobre o projeto

O objetivo foi reproduzir fielmente um design do Figma em código,
praticando responsividade *mobile-first*, um sistema de design
consistente via variáveis CSS, e pequenas interações em JavaScript
puro (sem depender de bibliotecas para isso).

## Seções da página

- **Header** fixo com logo, navegação (Home, Metodologia, Aprendizados)
  e CTA "Agende uma Demo" no desktop; menu lateral (drawer) com overlay
  no mobile
- **Hero** com imagem, título de boas-vindas e botão "Saiba mais" —
  troca de imagem (mobile solta / desktop com overlay de gradiente)
  conforme o breakpoint
- **Seção "Dando vida às suas ideias na web"**, com um **accordion**
  (`<details>`/`<summary>` nativos do HTML) explicando os diferenciais:
  metodologia prática, suporte de especialistas e ambiente colaborativo
  — apenas um item fica aberto por vez
- **Seção "O que você vai aprender"**, com navegação por abas (Todos /
  Front-end / Back-end) e cards de conteúdo (HTML e CSS, JavaScript,
  Frameworks e Ferramentas)
- **Portfólio de Projetos**, com cards que revelam a descrição do
  projeto ao passar o mouse (hover), resolvido inteiramente em CSS,
  sem JavaScript
- **Newsletter**, com formulário de inscrição por e-mail com
  **validação em JavaScript** (regex + mensagem de erro visual)
- **Footer**, com marca, redes sociais, navegação organizada em
  colunas e links legais

## Funcionalidades implementadas

- [x] Layout 100% responsivo (mobile-first, breakpoint principal em
      1366px, com um ajuste intermediário de container em 1024px)
- [x] Menu mobile em drawer lateral, com overlay, fechamento por clique
      fora, botão "X" e tecla **Esc**
- [x] Accordion acessível usando `<details>`/`<summary>` nativos, com
      JavaScript garantindo que só um item fique aberto por vez
- [x] Sistema de abas (tabs) com destaque visual da aba ativa
- [x] Validação de formulário de e-mail em JavaScript puro (regex),
      com exibição/remoção de erro em tempo real
- [x] Efeito de hover nos cards de portfólio resolvido 100% em CSS
      (`max-height` + `opacity` com transição), sem JavaScript
- [ ] *Observação: as abas "Front-end" e "Back-end" hoje só destacam
      visualmente o botão clicado — a filtragem dos cards por
      categoria ainda não está implementada*

## Sistema de design (design tokens)

Todo o projeto segue uma paleta e escala de espaçamento centralizadas
em `style-guide.css`, usando **CSS Custom Properties** para espelhar
os tokens definidos no Figma:

```css
--blue-700: #0A46EA;   /* cor principal de botões e links */
--gray-700: #252B37;   /* cor principal de texto */
--spacing-4: 16px;      /* escala de espaçamento (múltiplos de 4px) */
--rounded-md: 8px;      /* arredondamento padrão de botões/cards */
```

Isso evita valores "mágicos" espalhados pelo CSS e facilita manter
consistência visual em qualquer alteração futura.

## Estrutura do projeto

```
├── index.html
├── style.css                # arquivo principal, importa os parciais abaixo
├── script.js                 # importa os módulos de JS
├── assets/
│   ├── fonts/                # Inter (variable font)
│   ├── icons/
│   └── images/
└── css/
    ├── reset.css              # reset básico + tipografia global
    ├── style-guide.css        # variáveis de design (cores, spacing, fontes)
    ├── containers.css         # container responsivo central
    ├── components.css         # botões e badges reutilizáveis
    ├── header.css
    ├── hero.css
    ├── secao-1.css             # seção "ideias na web" + accordion
    ├── secao-2.css             # seção "o que você vai aprender" + cards
    ├── menu-mobile.css         # menu lateral (drawer) mobile
    ├── footer.css
    └── (arquivos de tabs/portfólio/newsletter)
└── js/
    ├── accordion.js            # 1 item aberto por vez
    ├── menu-mobile.js           # abrir/fechar drawer + tecla Esc
    ├── tabnav.js                # destaque visual da aba ativa
    └── secoes.js                # validação do formulário de newsletter
```


## Tecnologias usadas

- **HTML5** semântico (`<header>`, `<nav>`, `<section>`, `<footer>`,
  `<details>`/`<summary>` para o accordion)
- **CSS3** — mobile-first, Flexbox, variáveis CSS (design tokens),
  `@font-face` para fonte customizada (Inter)
- **JavaScript** (ES6+, módulos) — sem bibliotecas externas
