var data = new Date()
var horaAtual = data.getHours().toString().padStart(2, '0')   //define duas casas decimais para as horas
var minAtual = data.getMinutes().toString().padStart(2, '0') //define duas casas decimais para os minutos 
var hora = document.getElementsByTagName('p')[0]
var imagem = document.getElementById('imagem')
hora.innerHTML = `Agora são ${horaAtual}:${minAtual} horas.`
if (horaAtual < 12) {
    document.body.style.background = '#83B6C7'
    imagem.style.backgroundImage = 'url(midias/foto-dia.jpg)'
} else if (horaAtual < 19) {
    document.body.style.background = '#A56737'
    imagem.style.backgroundImage = 'url(midias/foto-tarde.jpg)'
} else {
    document.body.style.background = '#1C272D'
    imagem.style.backgroundImage = 'url(midias/foto-noite.jpg)'
}