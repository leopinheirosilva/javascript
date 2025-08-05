let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('resultado')
let valores = []
function isNumero(n) {  //função que verifica se o número é válido entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {    //função que verifica se o número já foi inserido
    if (l.indexOf(Number(n)) != -1) {   //-1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {  //determina os atributos reais das funçoes recursivas
        valores.push(Number(num.value)) //adiciona um elemento ao array valores
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''    //zera o conteúdo da variavel res sempre que um outro número é adicionado
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //zera o conteúdo da variavel num e seleciona automaticamente a caixa de texto
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        valores.sort()  //coloca os números do array em ordem crescente
        let menor = valores[0]  //com os números em ordem crescente, o elemento [0] será sempre o menor
        let maior = [0] //a variavel maior comecará em 0
        let soma = 0
        for (let proximo in valores) {
            soma += valores[proximo]    //soma todos os elementos do array
            if (valores[proximo] > maior)
                maior = valores[proximo]
        }
        media = soma / valores.length
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números adicionados.</p> <br>`
        resultado.innerHTML += `<p>O maior valor informado é ${maior}.</p> <br>`
        resultado.innerHTML += `<p>O menor valor informado é ${menor}.</p> <br>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p> <br>`
        resultado.innerHTML += `<p>A média de todos os valores é ${media}</p> <br>`
    }
}
function limpar() {
    resultado.innerHTML = ''
    lista.innerHTML = ''
    valores = [0]
}
