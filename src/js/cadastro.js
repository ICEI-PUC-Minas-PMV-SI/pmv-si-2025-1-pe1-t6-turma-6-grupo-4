const validarQuantidade = (quantidades) => {
  if (quantidades.length > 2) {
    return false;
  }
  for (const quantidade of quantidades) {
    if (isNaN(quantidade)) {
      return false;
    }
  }
  if (quantidades.length == 2) {
    return Number(quantidades[1]) > Number(quantidades[0]);
  }
  return true;
};

const inputQtd = document.getElementById("qtd-jogadores");
inputQtd.addEventListener("input", () => {
  const quantidades = inputQtd.value.split("-");
  if (!validarQuantidade(quantidades)) {
    inputQtd.setCustomValidity("Quantidade inválida. Ex: 1, 2-5.");
  } else {
    inputQtd.setCustomValidity("");
  }
});

const carregaCategorias = () => {
  const categorias = [
    "Carteado",
    "Colecionável",
    "Destreza",
    "Dungeon Crawler",
    "Estratégia Abstrata",
    "Expansão ou Suplemento",
    "Imprima e Jogue",
    "Jogo Assimétrico",
    "Jogo de Cartas",
    "Jogo de Dados",
    "Jogo de Entrada",
    "Jogo de Guerra",
    "Jogo Festivo",
    "Livro-jogo",
    "Miniaturas",
    "Quebra-Cabeça",
    "Trivia",
  ];
  const categoriaSelect = document.getElementById("categoria");
  categorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    categoriaSelect.appendChild(option);
  });
};
carregaCategorias();

const salvarJogo = (nome, categoria, qtdJogadores, descricao, fotoUrl) => {
  const jogo = {
    nome,
    categoria,
    qtdJogadores,
    descricao,
    foto: fotoUrl,
  };
  const jogos = JSON.parse(localStorage.getItem("jogos") || "[]");
  jogos.push(jogo);
  localStorage.setItem("jogos", JSON.stringify(jogos));
  form.reset();
};

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const qtdJogadores = document.getElementById("qtd-jogadores").value;
  const descricao = document.getElementById("descricao").value;
  const fotoUrl = document.getElementById("foto").value;

  salvarJogo(nome, categoria, qtdJogadores, descricao, fotoUrl);
});
