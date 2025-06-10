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
  },
  {
    nome: "Ticket to Ride",
    descricao:
      "Compita para construir rotas de trens e completar objetivos secretos.",
    imagem:
      "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__itemrep/img/iiTIuTtuneM3tbDCjALecsgyizA=/fit-in/246x300/filters:strip_icc()/pic38668.jpg",
    generos: ["Construção de rotas", "Coleção de componentes", "Gestão de mão"],
  },
  // {
  //   nome: "Carcassonne",
  //   descricao: "Coloque peças para construir cidades, estradas e campos.",
  //   imagem:
  //     "https://cf.geekdo-images.com/nG0jRhT4ZLJMPml5nULV6A__itemrep/img/lXp9NBoRMUt8KnJ7ksquqS4-vvE=/fit-in/246x300/filters:strip_icc()/pic5444753.jpg",
  //   generos: [
  //     "Colocação de peças",
  //     "Controle/área de influência",
  //     "Tabuleiro modular",
  //   ],
  // },
  // {
  //   nome: "Pandemic",
  //   descricao: "Trabalhe em equipe para conter surtos de doenças no mundo.",
  //   imagem:
  //     "https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__itemrep/img/wAMLbgihOl7dJDHnvqt7OXKEV-4=/fit-in/246x300/filters:strip_icc()/pic1534148.jpg",
  //   generos: [
  //     "Cooperativo",
  //     "Gestão de mão",
  //     "Alocação de trabalhadores",
  //     "Movimento em pontos",
  //   ],
  // },
  {
    nome: "Dixit",
    descricao: "Use pistas criativas para fazer outros adivinharem sua carta.",
    imagem:
      "https://cf.geekdo-images.com/J0PlHArkZDJ57H-brXW2Fw__itemrep/img/tsmN3sAHJ6trDaWNbq08BZXtq7g=/fit-in/246x300/filters:strip_icc()/pic6738336.jpg",
    generos: ["Seleção de cartas", "Aposta", "Gestão de mão"],
  },
  {
    nome: "Azul",
    descricao:
      "Crie padrões bonitos ao selecionar e posicionar peças de azulejos.",
    imagem:
      "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__opengraph_left/img/GOB-1CMPSNUPEv8PjpZn8lSM9Es=/fit-in/445x445/filters:strip_icc()/pic6973671.png",
    generos: ["Construção de padrão", "Draft (escolha/seleção) de componentes"],
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
  const divJogos = document.getElementById("jogos");
  const linha = divJogos.querySelector(".row");
  linha.innerHTML = "";
};

carregaJogos(jogos);

const filtraJogos = (jogos, nome) => {
  return jogos.filter((jogo) =>
    jogo.nome.toLowerCase().startsWith(nome.toLowerCase()),
  );
};

document.getElementById("filtro").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome-jogo").value;
  limpaJogos();
  const jogosFiltrados = filtraJogos(jogos, nome);
  console.log(jogosFiltrados);
  carregaJogos(jogosFiltrados);
});
