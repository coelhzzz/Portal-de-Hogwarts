/* =======================
   ESTRELAS ANIMADAS
======================= */
function criarEstrelas(qtd) {
  const overlay = document.getElementById("overlay");
  
  for (let i = 0; i < qtd; i++) {
    const estrela = document.createElement("span");
    estrela.classList.add("estrela");

    // Posição aleatória
    estrela.style.top = Math.random() * 100 + "%";
    estrela.style.left = Math.random() * 100 + "%";

    // Tamanho e brilho diferentes
    const size = Math.random() * 3 + 2; // 2px a 5px
    estrela.style.width = size + "px";
    estrela.style.height = size + "px";

    // Duração da animação
    estrela.style.animationDuration = (Math.random() * 3 + 2) + "s";

    overlay.appendChild(estrela);
  }
}

criarEstrelas(60); // Cria 60 estrelas mágicas

/* =======================
   BOTÃO ENTRAR
======================= */
document.getElementById("btn-entrar").addEventListener("click", () => {
  window.location.href = "casas.html"; // Redireciona para a próxima página
});

/* =======================
   CHAPÉU SELETOR FALANDO
======================= */
const falas = [
  "Hum... vejo coragem em você!",
  "Uma mente sábia, sem dúvidas...",
  "Astúcia e ambição, isso é notável!",
  "Lealdade pura, isso é raro!",
  "Difícil, muito difícil... onde devo colocá-lo?"
];

document.getElementById("sorting-hat").addEventListener("click", () => {
  const fala = falas[Math.floor(Math.random() * falas.length)];
  alert("👒 Chapéu Seletor: " + fala);
});
