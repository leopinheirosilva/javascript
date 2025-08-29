function contar() {
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var res = document.getElementById("res");
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossível contar";
    alert("Digite um número válido");
  } else {
    res.innerHTML = " ";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if (p <= 0) {
      // Condição caso o valor de Passo for 0 -> var p passa a valer 1
      alert("Passo inválido! Considerando Passo 1");
      p = 1;
    }
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        // Contagem crescente
        res.innerHTML += ` ${c} \u{1F449}`; // emoji
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        // Contagem regressiva
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
