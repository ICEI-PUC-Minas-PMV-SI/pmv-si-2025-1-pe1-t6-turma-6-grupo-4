const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioValido = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha,
  );

  localStorage.setItem("usuario", JSON.stringify(usuarioValido));

  if (usuarioValido) {
    window.location.href = "/";
  } else {
    alert("Email ou senha inválidos.");
  }
});
