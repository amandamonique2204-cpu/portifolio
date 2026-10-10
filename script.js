
var botao = document.getElementById("botao-mood");

botao.addEventListener("click", function () {
  document.body.classList.toggle("mood-escuro");
});


// parte da animação
window.addEventListener("load", function () {
  var trilhos = document.querySelectorAll(".trilho");

  for (var i = 0; i < trilhos.length; i++) {
    var trilho = trilhos[i];
    var grupo = trilho.querySelector(".grupo");

    // começa com 1 cópia (2 grupos no total)
    copiar(trilho, grupo);

    // o de rodar
    while (trilho.scrollWidth < 2200) {
      copiar(trilho, grupo);
      copiar(trilho, grupo);
    }
  }
});

// faz uma cópia do grupo de logos e coloca no final da fita
function copiar(trilho, grupo) {
  var copia = grupo.cloneNode(true);
  copia.setAttribute("aria-hidden", "true"); // leitor de tela ignora as cópias
  trilho.appendChild(copia);
}

// scrolling suave
const lenis = new Lenis({
  duration: 1.2, // Quanto MAIOR esse número, mais "pesada" e suave a página fica
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de física/inércia
  smoothWheel: true // Ativa o peso para a rodinha do mouse
});

// Mantém a animação rodando de forma fluida a cada frame da tela
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
