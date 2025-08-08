let idnome = document.getElementById('idnome')
let idsobrenome = document.getElementById('idsobrenome')
let idnasc = document.getElementById('idnasc')
let idpssw = document.getElementById('idpssw')
let idconfirm = document.getElementById('idconfirm')
let idemail = document.getElementById('idemail')
function limparConteudo() {
    let nome = idnome.value
    let sobrenome = idsobrenome.value
    let nasc = idnasc.value
    let pssw = idpssw.value
    let confirm = idconfirm.value
    let email = idemail.value
    nome.innerHTML = ''
    sobrenome.innerHTML = ''
    nasc.innerHTML = ''
    pssw.innerHTML = ''
    confirm.innerHTML = ''
    email.innerHTML = ''
}