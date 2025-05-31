function adicionarJogo(titulo, descricao, urlImagem) {
    const divJogos = document.getElementById("jogos");

    // Criar o container do card
    const colunaCard = document.createElement("div");
    colunaCard.className = "col";

    const card = document.createElement("div");
    card.className = "card";

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
    const linha = divJogos.querySelector(".row");
    linha.appendChild(colunaCard);
}

const jogos = [
    { "nome": "Terraforming Mars", "descricao": "Foo", "imagem": "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__itemrep/img/IwUOQfhP5c0KcRJBY4X_hi3LpsY=/fit-in/246x300/filters:strip_icc()/pic3536616.jpg" }
]

jogos.forEach((jogo) => adicionarJogo(jogo.nome, jogo.descricao, jogo.imagem))

