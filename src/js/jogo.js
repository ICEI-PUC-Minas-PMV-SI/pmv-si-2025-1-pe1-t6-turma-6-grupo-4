const params = new URLSearchParams(window.location.search);
const nomeJogo = params.get("nome");
document.title = nomeJogo[0].toUpperCase() + nomeJogo.slice(1).toLowerCase();

document.getElementsByTagName("title");

const jogos = JSON.parse(localStorage.getItem("jogos") || "[]");

const slug = (nome) => nome.toLowerCase().replaceAll(" ", "-");
const idJogo = jogos.findIndex((j) => slug(j.nome) === slug(nomeJogo));
const jogo = jogos[idJogo];

const mostraAvaliacao = (nota) => {
  const radio = document.getElementById(`star-${nota}`);
  radio.checked = true;
};

if (jogo) {
  document.getElementById("imagem").src = jogo.imagem;
  document.getElementById("imagem").alt = jogo.nome;
  document.getElementById("titulo").textContent = jogo.nome;
  document.getElementById("descricao").textContent = jogo.descricao;
  if (jogo.avaliacao) {
    mostraAvaliacao(jogo.avaliacao);
  }
} else {
  alert("Jogo não encontrado.");
}
const avaliacaoInputs = document.querySelectorAll(
  '#sua-avaliacao input[type="radio"]',
);
avaliacaoInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    jogo.avaliacao = parseInt(event.target.value);
    jogos[idJogo] = jogo;
    localStorage.setItem("jogos", JSON.stringify(jogos));
  });
});
