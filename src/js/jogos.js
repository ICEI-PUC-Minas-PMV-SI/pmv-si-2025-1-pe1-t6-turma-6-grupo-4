// const jogos = [
//   {
//     nome: "Coup",
//     descricao:
//       "Em Coup, você quer ser o último jogador com influência no jogo. A influência é representada por cartas de personagens com a face para baixo em sua área de jogo.",
//     imagem:
//       "https://cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__itemrep/img/QRw3T5XGsrRs-QKCSpzwE7nFqOg=/fit-in/246x300/filters:strip_icc()/pic2016054.jpg",
//   },
//   {
//     nome: "Terraforming Mars",
//     descricao:
//       "Em Terraforming Mars, nos anos de 2400, a humanidade começa a terraformar o planeta Marte. Corporações gigantes, patrocinadas pelo Governo Mundial na Terra, iniciam grandes projetos para aumentar a temperatura, o nível de oxigênio e a cobertura do oceano até que o ambiente se torne habitável.",
//     imagem:
//       "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__itemrep/img/IwUOQfhP5c0KcRJBY4X_hi3LpsY=/fit-in/246x300/filters:strip_icc()/pic3536616.jpg",
//   },
// ];

const jogos = [
  {
    nome: "Catan",
    descricao:
      "Jogo de negociação e construção onde jogadores colonizam uma ilha.",
    imagem:
      "https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__itemrep/img/zUs-jB7S9JTuLPOcY9pUxaqYNqA=/fit-in/246x300/filters:strip_icc()/pic8632666.png",
    generos: [
      "Negociação",
      "Gestão de mão",
      "Tabuleiro modular",
      "Construção de rotas",
      "Rolagem de dados",
    ],
    num_jogadores: "3-4",
  },
  {
    nome: "Ticket to Ride",
    descricao:
      "Compita para construir rotas de trens e completar objetivos secretos.",
    imagem:
      "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__itemrep/img/iiTIuTtuneM3tbDCjALecsgyizA=/fit-in/246x300/filters:strip_icc()/pic38668.jpg",
    generos: ["Construção de rotas", "Coleção de componentes", "Gestão de mão"],
    num_jogadores: "2-5",
  },
  {
    nome: "Dixit",
    descricao: "Use pistas criativas para fazer outros adivinharem sua carta.",
    imagem:
      "https://cf.geekdo-images.com/J0PlHArkZDJ57H-brXW2Fw__itemrep/img/tsmN3sAHJ6trDaWNbq08BZXtq7g=/fit-in/246x300/filters:strip_icc()/pic6738336.jpg",
    generos: ["Seleção de cartas", "Aposta", "Gestão de mão"],
    num_jogadores: "3-6",
  },
  {
    nome: "Azul",
    descricao:
      "Crie padrões bonitos ao selecionar e posicionar peças de azulejos.",
    imagem:
      "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__opengraph_left/img/GOB-1CMPSNUPEv8PjpZn8lSM9Es=/fit-in/445x445/filters:strip_icc()/pic6973671.png",
    generos: ["Construção de padrão", "Draft (escolha/seleção) de componentes"],
    num_jogadores: "2-4",
  },
  {
    nome: "7 Wonders",
    descricao:
      "Desenvolva sua civilização escolhendo cartas para construir maravilhas.",
    imagem:
      "https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__itemrep/img/EUlr4of74-i75S-jIrgNfaQ3M6Q=/fit-in/246x300/filters:strip_icc()/pic7149798.jpg",
    generos: [
      "Draft (escolha/seleção) de cartas",
      "Construção de baralho/peças",
      "Coleção de componentes",
    ],
    num_jogadores: "3-7",
  },
  // {
  //   nome: "Coup",
  //   descricao:
  //     "Jogo de blefe onde cada jogador tenta eliminar os outros usando influência.",
  //   imagem:
  //     "https://cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__itemrep/img/QRw3T5XGsrRs-QKCSpzwE7nFqOg=/fit-in/246x300/filters:strip_icc()/pic2016054.jpg",
  //   generos: ["Blefe", "Eliminação de jogadores"],
  // },
  // {
  //   nome: "Terraforming Mars",
  //   descricao:
  //     "Compita para terraformar Marte com cartas e projetos especiais.",
  //
  //   imagem:
  //     "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__itemrep/img/IwUOQfhP5c0KcRJBY4X_hi3LpsY=/fit-in/246x300/filters:strip_icc()/pic3536616.jpg",
  //   generos: [
  //     "Construção de baralho/peças",
  //     "Gestão de mão",
  //     "Gestão de recursos",
  //     "Tabuleiro modular",
  //   ],
  // },
];
const carregaJogos = (jogos) => {
  jogos.forEach((jogo) =>
    adicionarJogo(jogo.nome, jogo.descricao, jogo.imagem),
  );
};

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
  tituloCard.textContent = titulo;

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
  const generos = [];
  for (const jogo of jogos) {
    numJogadores.push(jogo.num_jogadores);
    generos.push(...jogo.generos);
  }
  console.log(numJogadores);

  alimentaSelect("num-jogadores", numJogadores.sort());
  alimentaSelect("generos", generos.sort());
};

carregaJogos(jogos);
alimentaOpcoes(jogos);

const filtraJogos = (jogos, nome, numJogadores, genero) => {
  let jogosFiltrados = [];
  for (const jogo of jogos) {
    if (nome && !jogo.nome.toLowerCase().includes(nome.toLowerCase())) {
      continue;
    }
    if (numJogadores && jogo.num_jogadores !== numJogadores) {
      continue;
    }
    if (genero && !jogo.generos.includes(genero)) {
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
  const genero = document.getElementById("generos").value;
  const jogosFiltrados = filtraJogos(jogos, nome, numJogadores, genero);
  carregaJogos(jogosFiltrados);
});
