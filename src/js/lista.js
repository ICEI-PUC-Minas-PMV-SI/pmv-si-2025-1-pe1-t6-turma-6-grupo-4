const carregaJogos = (jogos) => {
  jogos.forEach((jogo) =>
    adicionarJogo(jogo.nome, jogo.descricao, jogo.imagem),
  );
};

function carregaJogosLocalStorage() {
  const jogosSalvos = localStorage.getItem("jogos");
  if (jogosSalvos) {
    return JSON.parse(jogosSalvos);
  }
  return [];
}

carregaJogosLocalStorage();

function adicionarJogo(titulo, descricao, urlImagem) {
  // Criar o container do card
  const colunaCard = document.createElement("div");
  colunaCard.className = "col";

  const card = document.createElement("div");
  card.className = "card h-100";

  // Adicionar imagem
  const imagemCard = document.createElement("img");
  imagemCard.src = urlImagem;
  imagemCard.className = "card-img-top";
  imagemCard.alt = titulo;

  // Adicionar corpo do card
  const corpoCard = document.createElement("div");
  corpoCard.className = "card-body";

  const tituloCard = document.createElement("h5");
  tituloCard.className = "card-title";

  const link = document.createElement("a");
  link.href = `jogo?nome=${titulo.toLowerCase().replaceAll(" ", "-")}`;
  link.textContent = titulo;
  tituloCard.appendChild(link);

  const textoCard = document.createElement("p");
  textoCard.className = "card-text";
  textoCard.textContent = descricao;

  // Anexar elementos
  corpoCard.appendChild(tituloCard);
  corpoCard.appendChild(textoCard);
  card.appendChild(imagemCard);
  card.appendChild(corpoCard);
  colunaCard.appendChild(card);

  // Anexar o card à div jogos
  const lista = document.getElementById("lista");
  lista.appendChild(colunaCard);
}

const limpaJogos = () => {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
};

const alimentaSelect = (selectID, values) => {
  const select = document.getElementById(selectID);
  [...new Set(values)].forEach((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
};

const alimentaOpcoes = (jogos) => {
  const numJogadores = [];
  const categorias = [];
  for (const jogo of jogos) {
    numJogadores.push(jogo.qtdJogadores);
    categorias.push(jogo.categoria);
  }

  alimentaSelect("num-jogadores", numJogadores.sort());
  alimentaSelect("categoria", categorias.sort());
};

jogos = carregaJogosLocalStorage();
carregaJogos(jogos);
alimentaOpcoes(jogos);

const filtraJogos = (jogos, nome, numJogadores, categoria, avaliado) => {
  let jogosFiltrados = [];
  for (const jogo of jogos) {
    if (nome && !jogo.nome.toLowerCase().includes(nome.toLowerCase())) {
      continue;
    }
    if (numJogadores && jogo.num_jogadores !== numJogadores) {
      continue;
    }
    if (categoria && jogo.categoria !== categoria) {
      continue;
    }
    if (avaliado && !jogo.avaliacao) {
      continue;
    }
    jogosFiltrados.push(jogo);
  }
  return jogosFiltrados;
};

document.getElementById("filtro").addEventListener("submit", (event) => {
  event.preventDefault();
  limpaJogos();
  const nome = document.getElementById("nome-jogo").value;
  const numJogadores = document.getElementById("num-jogadores").value;
  const categoria = document.getElementById("categoria").value;
  const avaliado = document.getElementById("avaliado").checked;
  const jogosFiltrados = filtraJogos(
    jogos,
    nome,
    numJogadores,
    categoria,
    avaliado,
  );
  carregaJogos(jogosFiltrados);
});
