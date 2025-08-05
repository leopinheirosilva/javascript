function resultado() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um número válido')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X $${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}