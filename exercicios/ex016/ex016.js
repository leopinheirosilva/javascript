var hrAtual = new Date()
var hora = hrAtual.getHours().toString().padStart(2, '0')
var min = hrAtual.getMinutes().toString().padStart(2, '0')
var txtHora = document.getElementsByTagName('p')[0]
var imagem = document.getElementById('imagem')
txtHora.innerHTML = `Agora são ${hora}:${min} horas.`
if (hora < 12) {
    document.body.style.background = 'rgb(131, 182, 199)'
    imagem.style.backgroundImage = 'url(midias/foto-dia.jpg)'
} else if (hora < 19) {
    document.body.style.background = 'rgb(173, 114, 74)'
    imagem.style.backgroundImage = 'url(midias/foto-tarde.jpg)'
} else {
    document.body.style.background = '#2a2a2d'
    imagem.style.backgroundImage = 'url(midias/foto-noite.jpg)'
}