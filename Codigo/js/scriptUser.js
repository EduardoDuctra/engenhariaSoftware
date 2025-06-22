let usuarioData = [];

async function carregarUsuarios() {
  try {
    const response = await fetch("dadosUsuario.json");
    usuarioData = await response.json();
  } catch (error) {
    console.error("Erro ao carregar JSON:", error);
  }
}

carregarUsuarios();

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (usuarioData.length === 0) {
    alert(
      "Dados de usuário ainda não foram carregados. Tente novamente em instantes."
    );
    return;
  }

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = usuarioData.find(
    (u) => u.email === email && u.senha === senha
  );

  if (usuario) {
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "paginaCurso.html";
  } else {
    alert("E-mail ou senha inválidos.");
  }
});
