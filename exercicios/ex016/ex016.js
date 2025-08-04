var hrAtual = new Date()
var hora = hrAtual.getHours().toString().padStart(2, '0')
var min = hrAtual.getMinutes().toString().padStart(2, '0')
var txtHora = document.getElementsByTagName('p')[0]
var imagem = document.getElementById('imagem')
txtHora.innerHTML = `Agora são ${hora}:${min} horas.`
var hora = 22
if (hora < 12) {
    document.body.style.background = '#83B6C7'
    imagem.style.backgroundImage = 'url(midias/foto-dia.jpg)'
} else if (hora < 19) {
    document.body.style.background = '#A56737'
    imagem.style.backgroundImage = 'url(midias/foto-tarde.jpg)'
} else {
    document.body.style.background = '#1C272D'
    imagem.style.backgroundImage = 'url(midias/foto-noite.jpg)'
}