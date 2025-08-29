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
    let lista = document.createElement("li");
    tarefaList.push(tarefa);
    confirmTarefa.innerHTML = "Tarefa adicionada!";
    inputTarefa.focus();
    inputTarefa.value = "";
    lista.textContent = tarefa;
    mensagem.appendChild(lista);
  }
}
