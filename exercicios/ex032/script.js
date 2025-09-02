//codigo para mostrar conteudo dos inputs senha e confirmar senha
const passowrdIcons = document.querySelectorAll(".password-icon");
passowrdIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    input.type = input.type === "password" ? "text" : "password"; //condicao ternaria
    this.classList.toggle("fa-solid fa-eye"); //adiciona ou remove a classe
  });
});
//codigo para validacao do formulario
const mensagemErro = document.querySelectorAll(".mensagem_erro");
const cadastrar = document.getElementById("btn-submit");
const nome = document.getElementById("input-name").value;
const sobrenome = document.getElementById("input-surname").value;
const nascimento = document.getElementById("input-birthdate").value;
const email = document.getElementById("input-email").value;
const senha = document.getElementById("input-password").value;
const confirmarSenha = document.getElementById("input-confirm-password").value;
const data = new Date();
const currentYear = data.getFullYear();
function criarConta() {
    if (nome.length == 0) {
        mensagemErro[0].textContent = "campo obrigatório!";
    }
    if (sobrenome.length == 0) {
        mensagemErro[1].textContent = "campo obrigatório!";
    }
    if (nascimento.length == 0 || nascimento >= currentYear) {
        mensagemErro[2].textContent = "data inválida!";
    }
    if (email.length == 0 || !email.includes("@")) {
        mensagemErro[3].textContent = "email inválido!";
    }
    if (senha.length == 0) {
        mensagemErro[4].textContent = "campo obrigatório!";
    }
    if (confirmarSenha.length == 0 || confirmarSenha !== senha) {
        mensagemErro[5].textContent = "senhas não conferem!";
    } else {
        cadastrar.innerHTML = "Conta criada com sucesso!";
    }
}
