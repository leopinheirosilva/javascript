const inputTarefa = document.getElementById("inputTarefa"); //recebe os dados do input
const mensagem = document.getElementById("mensagem"); //onde as tarefas serão exibidas
const confirmTarefa = document.getElementById("confirmTarefa"); //texto de confirmação
let tarefaList = []; //array que armazena as tarefas
//verifica se a lista está vazia ou nao
function inLista(n, lista) {
  if (lista.indexOf(String(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
//funcao para adicionar tarefa
function adicionarTarefa() {
  let tarefa = inputTarefa.value.trim(); //remove os espaços entre a string
  //verifica se o input está vazio ou se a tarefa já existe na lista
  if (tarefa == "" || inLista(tarefa, tarefaList)) {
    alert("[ERROR] Palavra inválida ou item já adicionado");
  } else {
    confirmTarefa.innerHTML = "Tarefa adicionada!";
    tarefaList.push(tarefa); //adiciona a tarefa no array tarefaList
    renderizarTarefa(); //chama a funcao renderizarTarefa
  }
}
function renderizarTarefa() {
  mensagem.innerHTML = "";
  //percorrendo o array tarefaList
  for (let i = 0; i < tarefaList.length; i++) {
    let lista = document.createElement("li"); //criando elemento li
    lista.textContent = tarefaList[i];
    //criando div de botoes
    let divBotoes = document.createElement("div");
    divBotoes.className = "botoes_lista";
    lista.appendChild(divBotoes);
    //criando botao remover
    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "remover";
    botaoRemover.onclick = () => removerTarefa(i); //chamando funcao removerTarefa
    //criando botao editar
    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "editar";
    botaoEditar.onclick = () => editarTarefa(i); //chamando funcao editarTarefa
    //adicionando os botoes na div
    divBotoes.appendChild(botaoRemover);
    divBotoes.appendChild(botaoEditar);
    //adicionando a div na lista
    lista.appendChild(divBotoes);
    //adicionando a lista na mensagem
    mensagem.appendChild(lista);
  }
  inputTarefa.value = ""; //limpa o input
  inputTarefa.focus(); //foca o cursor no input
}
function removerTarefa(i) {
  tarefaList.splice(i, 1); //remove a tarefa da lista
  renderizarTarefa();
}
function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:"); //caixa de prompt para editar a tarefa
  //verifica se o input está vazio ou se a tarefa já existe na lista
  if (tarefaEditada.trim() == "" || inLista(tarefaEditada, tarefaList)) {
    alert("[ERROR] Palavra inválida ou item já adicionado");
  } else {
    tarefaList[i] = tarefaEditada; //atualiza a tarefa no array
    renderizarTarefa();
  }
}
//funcao para limpar todo o conteudo da lista
function limparConteudo() {
  //verifica se a lista já está vazia
  if (tarefaList.length == 0) {
    alert("A lista já está vazia!");
  } else {
    tarefaList.length = 0; //limpa o array tarefaList
    renderizarTarefa();
    confirmTarefa.innerHTML = "Lista de tarefas limpa!"; //mensagem de confirmação
  }
}
