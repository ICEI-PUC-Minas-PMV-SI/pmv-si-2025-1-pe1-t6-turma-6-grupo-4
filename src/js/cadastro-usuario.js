// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios.push({ nome, email, senha });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  form.reset();
});
