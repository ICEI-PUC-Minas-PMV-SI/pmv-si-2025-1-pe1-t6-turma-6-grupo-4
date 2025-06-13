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
  console.log(quantidades);
  if (!validarQuantidade(quantidades)) {
    inputQtd.setCustomValidity("Quantidade inválida. Ex: 1, 2-5.");
  } else {
    inputQtd.setCustomValidity("");
  }
});
