//codigo para mostrar conteudo dos inputs senha e confirmar senha
const passowrdIcons = document.querySelectorAll(".password-icon");
passowrdIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    input.type = input.type === "password" ? "text" : "password"; //condicao ternaria
    this.classList.toggle("fa-eye");
  });
});
//codigo para validacao do formulario
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário
  // Aqui você pode adicionar a lógica de validação
  function isEmpty(value) {
    return value === "";
  }
  const error = document.getElementsByClassName("mensagem_erro");
  const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';
  const data = new Date();
  const currentDate = data.getFullYear();
  const name = document.getElementById("input-name").value;
  if (isEmpty(name)) {
    error[0].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  } else {
    error[0].innerHTML = "";
  }
  const surname = document.getElementById("input-surname").value;
  if (isEmpty(surname)) {
    error[1].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  } else {
    error[1].innerHTML = "";
  }
  const birthdate = document.getElementById("input-birthdate").value;
  if (isEmpty(birthdate) || birthdate > currentDate) {
    error[2].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  }
  else {
    error[2].innerHTML = "";
  }
  const email = document.getElementById("input-email").value;
  if (isEmpty(email)) {
    error[3].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  } else {
    error[3].innerHTML = "";
  }
  const password = document.getElementById("input-password").value;
  if (isEmpty(password)) {
    error[4].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  } else {
    error[4].innerHTML = "";
  }
  const confirmPassword = document.getElementById(
    "input-confirm-password"
  ).value;
  if (isEmpty(confirmPassword)) {
    error[5].innerHTML = ` ${errorIcon} Campo obrigatório!`;
  } else {
    error[5].innerHTML = "";
  }
});
