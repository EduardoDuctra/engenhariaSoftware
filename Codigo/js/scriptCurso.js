document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

  console.log("Usuário logado:", usuarioLogado);

  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "index.html";
    return;
  }

  // Preenche nome na navbar
  document.getElementById(
    "welcome-message"
  ).innerText = `Bem-Vindo, ${usuarioLogado.nome}!`;

  // Pega os cursos no JSON e cria opções na lista suspensa
  const selectCurso = document.getElementById("curso");
  const cursos = Object.keys(usuarioLogado.cursos);

  cursos.forEach((curso) => {
    const option = document.createElement("option");
    option.value = curso;
    option.textContent = curso;
    selectCurso.appendChild(option);
  });

  // Adiciona os event listeners dos botões já existentes
  const botoes = document.querySelectorAll(".botao-curso");

  console.log(`Quantidade de botões encontrados: ${botoes.length}`);

  if (botoes.length > 0) {
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        const textoCurso = botao.querySelector("p").textContent.trim();
        console.log("Botão clicado, curso:", textoCurso);

        localStorage.setItem("cursoSelecionado", textoCurso);
        window.location.href = "paginaAluno.html";
      });
    });
  } else {
    console.error("Botão com a classe 'botao-curso' não foi encontrado.");
  }

  // Função para mostrar ano — exposta globalmente para poder ser chamada no HTML
  mostrarAno = function () {
    const anoSelecionado = document.getElementById("ano").value;
    const cursoSelecionado = document.getElementById("curso").value;

    const evasao = usuarioLogado.cursos[cursoSelecionado][anoSelecionado];

    atualizarGrafico(cursoSelecionado, [evasao]);
  };

  // Evento para quando mudar o curso na lista suspensa
  document.getElementById("curso").addEventListener("change", (event) => {
    const cursoSelecionado = event.target.value;
    if (cursoSelecionado) criarBotoesCursos(cursoSelecionado);
  });

  // Função para criar botões dinamicamente para os cursos selecionados
  function criarBotoesCursos(cursoSelecionado) {
    const container = document.getElementById("container-cursos");
    container.innerHTML = "";

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "botao-curso";
    botao.id = cursoSelecionado;

    botao.innerHTML = `
      <p>${cursoSelecionado}</p>
      <img src="assets/back-svgrepo-com.svg" alt="Entrar Curso" />
    `;

    botao.addEventListener("click", () => {
      console.log("Botão clicado, curso:", cursoSelecionado);
      localStorage.setItem("cursoSelecionado", cursoSelecionado);
      window.location.href = "paginaAluno.html";
    });

    container.appendChild(botao);
  }

  // Função para atualizar o gráfico
  function atualizarGrafico(cursoSelecionado, dados) {
    myChart.data.labels = [cursoSelecionado];
    myChart.data.datasets[0].data = dados;
    myChart.update();
  }

  const ctx = document.getElementById("myChart").getContext("2d");

  window.myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Probabilidade de Evasão",
          data: [],
          backgroundColor: " #2b367d",
          borderColor: " #2b367d",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          min: 0,
          max: 1,
          ticks: {
            stepSize: 0.1,
          },
        },
      },
    },
  });
});

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
