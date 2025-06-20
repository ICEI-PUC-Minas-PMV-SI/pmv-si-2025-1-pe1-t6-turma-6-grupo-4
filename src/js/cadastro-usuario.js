// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioExistente = usuarios.findIndex((u) => u.email === email);
  if (usuarioExistente !== -1) {
    alert("Usuário já cadastrado com este email.");
    return;
  }

  usuarios.push({ nome, email, senha });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  window.location.href = "/login.html";
});
