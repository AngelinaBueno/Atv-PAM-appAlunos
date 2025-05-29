// Carrega a lista de alunos do navegador (localStorage)
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

// Função para adicionar um aluno
function adicionarAluno() {
  const nome = document.getElementById("nome").value;
  const nota = document.getElementById("nota").value;

  if (!nome) {
    alert("Digite o nome do aluno!");
    return;
  }

  alunos.push({ nome, nota }); // Adiciona o aluno na lista
  localStorage.setItem("alunos", JSON.stringify(alunos)); // Salva no navegador

  document.getElementById("nome").value = ""; // Limpa o campo de nome
  exibirAlunos(alunos); // Atualiza a lista na tela
}

// Mostra os alunos na tela
function exibirAlunos(lista) {
  const ul = document.getElementById("lista-alunos");
  ul.innerHTML = ""; // Limpa a lista atual

  lista.forEach(aluno => {
    const li = document.createElement("li");
    li.textContent = `${aluno.nome} - ${aluno.nota}`;
    ul.appendChild(li);
  });
}

// Função para filtrar os alunos
function filtrarAlunos() {
  const filtro = document.getElementById("filtro").value;

  if (filtro === "Todos") {
    exibirAlunos(alunos);
  } else {
    const filtrados = alunos.filter(aluno => aluno.nota === filtro);
    exibirAlunos(filtrados);
  }
}

// Exibe os alunos ao carregar a página
exibirAlunos(alunos);
