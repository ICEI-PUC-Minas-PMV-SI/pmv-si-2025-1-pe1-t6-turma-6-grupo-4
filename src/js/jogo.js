const params = new URLSearchParams(window.location.search);
const nomeJogo = params.get("nome");
document.title = nomeJogo[0].toUpperCase() + nomeJogo.slice(1).toLowerCase();

document.getElementsByTagName("title");

const jogos = JSON.parse(localStorage.getItem("jogos") || "[]");

const jogo = jogos.find((j) => j.nome.toLowerCase() === nomeJogo.toLowerCase());

if (jogo) {
  document.getElementById("imagem").src = jogo.imagem;
  document.getElementById("imagem").alt = jogo.nome;
  document.getElementById("titulo").textContent = jogo.nome;
  document.getElementById("descricao").textContent = jogo.descricao;
  const avaliacaoGeral = document.getElementById("avaliacao-geral");
} else {
  alert("Jogo não encontrado.");
}
