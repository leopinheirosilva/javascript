let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('resultado')
let valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        valores.sort()
        let menor = valores[0]
        let maior = [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
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
