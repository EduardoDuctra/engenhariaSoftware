let curso = null;
let alunos = [];
let usuarioLogado = null;
let myChart;

document.addEventListener("DOMContentLoaded", () => {
  usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "index.html"; // tem que trocar !!!!!!!!!!!!
    return;
  }

  curso = localStorage.getItem("cursoSelecionado");
  console.log("Curso selecionado:", curso);

  document.getElementById(
    "welcome-message"
  ).innerText = `Bem-Vindo, ${usuarioLogado.nome}!`;

  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Probabilidade de Evasão",
          data: [],
          backgroundColor: "rgb(120, 127, 173)",
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

// Carrega o JSON com os dados do aluno (continua igual, pois os alunos não vêm da sessão)
fetch("dadosAlunos.json")
  .then((response) => response.json())
  .then((data) => {
    alunos = data;
  })
  .catch((error) => {
    console.error("Erro ao carregar JSON:", error);
  });

function buscarAluno() {
  const valorBusca = document
    .getElementById("busca_aluno")
    .value.trim()
    .toLowerCase();

  const aluno = alunos.find(
    (a) =>
      a.nome.toLowerCase() === valorBusca ||
      a.matrícula.toString() === valorBusca
  );

  if (aluno && aluno.curso.toLowerCase() === curso.toLowerCase()) {
    atualizarGrafico(aluno);

    console.log("Aluno encontrado:");
    console.log("Nome:", aluno.nome);
    console.log("Matrícula:", aluno.matrícula);
    console.log("Curso:", aluno.curso);
    console.log("Histórico de Evasão:");
  } else {
    alert("Aluno não pertence ao curso ou não foi encontrado");
    atualizarGrafico(null);
  }
}

function atualizarGrafico(aluno) {
  if (!aluno) {
    myChart.data.labels = [];
    myChart.data.datasets[0].data = [];
    myChart.update();
    return;
  }

  const anos = Object.keys(aluno.historico_probabilidade_evasao);
  const probabilidades = Object.values(aluno.historico_probabilidade_evasao);

  myChart.data.labels = anos;
  myChart.data.datasets[0].data = probabilidades;
  myChart.update();
}

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html"; // tem que trocar !!!!!!!!!!!!
}
