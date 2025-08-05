function contar() {
    var inicio = Number(document.getElementById('inicio'))
    var fim = Number(document.getElementById('fim'))
    var passo = Number(document.getElementById('passo'))
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Digite um número válido')
    } else {
        while (inicio <= fim) {
            res.innerHTML = inicio + (passo)
        }
    }
}