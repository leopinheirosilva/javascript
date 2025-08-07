function adicionarTarefa() {
    let inputTarefa = document.getElementById('inputTarefa')
    let mensagem = document.getElementById('mensagem')
    if (inputTarefa.value.length == 0) {
        alert('[ERROR] Digite uma palavra válida')
    } else {
        let tarefa = inputTarefa.value
        inputTarefa.focus()
        mensagem.innerHTML += `- ${tarefa} <br>`
    }
}