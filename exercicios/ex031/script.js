function adicionarTarefa() {
    let inputTarefa = document.getElementById('inputTarefa')
    let mensagem = document.getElementById('mensagem')
    if (inputTarefa.value.length == 0) {
        alert('[ERROR] Digite uma palavra válida')
    } else {
        let tarefa = inputTarefa.value
        let lista = document.createElement('li')
        inputTarefa.focus()
        inputTarefa.value = ''
        lista.textContent = tarefa
        mensagem.appendChild(lista)
    }
}