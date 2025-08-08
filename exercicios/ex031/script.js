let inputTarefa = document.getElementById('inputTarefa')
let mensagem = document.getElementById('mensagem')
let tarefaList = []
function inLista(n, lista) {
    if (lista.indexOf(String(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionarTarefa() {
    if (inputTarefa.value.length == 0 || inLista(inputTarefa.value, tarefaList)) {
        alert('[ERROR] Palavra inválida ou item já adicionado')
    } else {
        let tarefa = inputTarefa.value.trim()
        let lista = document.createElement('li')
        tarefaList.push(tarefa)
        inputTarefa.focus()
        inputTarefa.value = ''
        lista.textContent = tarefa
        mensagem.appendChild(lista)
    }
}