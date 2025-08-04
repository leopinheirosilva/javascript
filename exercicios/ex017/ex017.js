function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var formSexo = document.getElementsByName('sexo') //[0,1]
        var genero = ''                                  //declaração da variável vazia
        var idade = ano - Number(formAno.value)
        var img = document.createElement('img') // irá criar uma tag img
        img.setAttribute('id', 'foto')          //definiu a tag img com o id 'foto'
        if (formSexo[0].checked) {  //verifica qual caixa está selecionada no form Sexo
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'midias/crianca-m.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else if (idade < 21) {
                img.setAttribute('src', 'midias/jovem-m.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else if (idade < 50) {
                img.setAttribute('src', 'midias/adulto-m.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else {
                img.setAttribute('src', 'midias/idoso-m.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            }
        } else if (formSexo[1].checked) {  //verifica qual caixa está selecionada no form Sexo
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'midias/crianca-f.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else if (idade < 21) {
                img.setAttribute('src', 'midias/jovem-f.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else if (idade < 50) {
                img.setAttribute('src', 'midias/adulto-f.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            } else {
                img.setAttribute('src', 'midias/idoso-f.png')
                img.style.cssText = 'display: block; margin:auto; width: 250px; heigh: 250px; padding-top: 10px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    //adicionar o elemento 'img'
    }
}