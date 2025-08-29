const inputTarefa = document.getElementById("inputTarefa");
const mensagem = document.getElementById("mensagem");
const confirmTarefa = document.getElementById("confirmTarefa");
let tarefaList = [];
function inLista(n, lista) {
  if (lista.indexOf(String(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionarTarefa() {
  let tarefa = inputTarefa.value.trim(); //remove os espaços entre a string
  if (tarefa == "" || inLista(tarefa, tarefaList)) {
    alert("[ERROR] Palavra inválida ou item já adicionado");
  } else {
    confirmTarefa.innerHTML = "Tarefa adicionada!";
    tarefaList.push(tarefa);
    renderizarTarefa(); //chama a funcao renderizarTarefa
  }
}
function renderizarTarefa() {
  mensagem.innerHTML = "";
  for (let i = 0; i < tarefaList.length; i++) {
    let lista = document.createElement("li");
    lista.textContent = tarefaList[i];
    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "remover";
    botaoRemover.onclick = () => removerTarefa(i); //chamando funcao removerTarefa
    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "editar";
    botaoEditar.onclick = () => editarTarefa(i);
    lista.appendChild(botaoRemover);
    lista.appendChild(botaoEditar);
    mensagem.appendChild(lista);
  }
  inputTarefa.value = "";
  inputTarefa.focus();
}
function removerTarefa(i) {
  tarefaList.splice(i, 1); //remove a tarefa da lista
  renderizarTarefa();
}
function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:");
  if (tarefaEditada.trim() == "" || inLista(tarefaEditada, tarefaList)) {
    alert("[ERROR] Palavra inválida ou item já adicionado");
  } else {
    tarefaList[i] = tarefaEditada;
    renderizarTarefa();
  }
}
function limparConteudo() {
  if (tarefaList.length == 0) {
    alert("A lista já está vazia!");
  } else {
    tarefaList.length = 0;
    renderizarTarefa();
    confirmTarefa.innerHTML = "Lista de tarefas limpa!";
  }
}
