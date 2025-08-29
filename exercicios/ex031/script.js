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

  function renderizarTarefa() {
    mensagem.innerHTML = "";
    let i = 0;
    for (i; i < tarefaList.length; i++) {
      let lista = document.createElement("li");
      lista.textContent = tarefaList[i];
      mensagem.appendChild(lista);
    }
  }
  inputTarefa.value = "";
  inputTarefa.focus();
}
