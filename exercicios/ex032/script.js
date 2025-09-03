//codigo para mostrar conteudo dos inputs senha e confirmar senha
const passwordIcons = document.querySelectorAll(".password-icon");
passwordIcons.forEach((icon) => { //arrow function
  icon.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    if (input.type === "text") {
      input.type = "password";
      //altera o icone
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      input.type = "text";
      //altera o icone
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }
  });
});
//validacao do formulario
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário
  //definição dos campos
  const fields = [
    {
      id: "input-name",
      label: "Nome",
      validator: nameisValid,
    },
    {
      id: "input-surname",
      label: "Sobrenome",
      validator: nameisValid,
    },
    {
      id: "input-birthdate",
      label: "Data de Nascimento",
      validator: dateisValid,
    },
    {
      id: "input-email",
      label: "E-mail",
      validator: emailisValid,
    },
    {
      id: "input-password",
      label: "Senha",
      validator: passwordisValid,
    },
    {
      id: "input-confirm-password",
      label: "Confirmar Senha",
      validator: confirmPassword,
    }
  ];
  //icone de erro
  const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';
  //validacao dos campos
  fields.forEach(function (field) {
    const input = document.getElementById(field.id);
    const inputBox = input.closest(".container_input");
    const inputValue = input.value;
    const error = inputBox.querySelector(".mensagem_erro");
    const fieldValidator = field.validator(inputValue);
    if (!fieldValidator.isValid) {
      error.innerHTML = ` ${errorIcon} ${fieldValidator.errorMessage}`;
      inputBox.classList.add("invalid");
    } else {
      error.innerHTML = "";
      inputBox.classList.remove("invalid");
    }
  });
});
//define se o campo esta vazio
function isEmpty(value) {
  return value === "";
}
//validaçao nome e sobrenome
function nameisValid(value) {
  const validator = {
    isValid: true,
    errorMessage: null,
  };
  if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Campo obrigatório!`;
    return validator;
  }
  const min = 3;
  if (value.length < min) {
    validator.isValid = false;
    validator.errorMessage = ` Mínimo ${min} caracteres!`;
    return validator;
  }
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Somente letras são permitidas!`;
  }
  return validator;
}
//validaçao data de nascimento
function dateisValid(value) {
  const validator = {
    isValid: true,
    errorMessage: null,
  };
  if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Campo obrigatório!`;
    return validator;
  }
  const currentYear = new Date(value).getFullYear();
  if (currentYear > new Date().getFullYear()) {
    validator.isValid = false;
    validator.errorMessage = ` Data inválida!`;
  }
  return validator;
}
//validacao e-mail
function emailisValid(value) {
  const validator = {
    isValid: true,
    errorMessage: null,
  };
  if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Campo obrigatório!`;
    return validator;
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    validator.isValid = false;
    validator.errorMessage = ` E-mail inválido!`;
  }
  return validator;
}
//validacao senha
function passwordisValid(value) {
  const validator = {
    isValid: true,
    errorMessage: null,
  };
  if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Campo obrigatório!`;
    return validator;
  }
  const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12}$)");
  if (!regex.test(value)) {
    validator.isValid = false;
    validator.errorMessage = ` 
    A senha deve conter: <br/>
    entre 6 e 12 caracteres <br/>
    ao menos 1 letra maiúscula <br/>
    ao menos 1 letra minúscula <br/>
    ao menos 1 número <br/>
    ao  menos 1 caractere especial
    `;
    return validator;
  }
  return validator;
}
//validacao de confirmacao de senha
function confirmPassword(value) {
  const validator = {
    isValid: true,
    errorMessage: null,
  };
  if (isEmpty(value)) {
    validator.isValid = false;
    validator.errorMessage = ` Campo obrigatório!`;
    return validator;
  }
  const password = document.getElementById("input-password").value;
  if (value !== password) {
    validator.isValid = false;
    validator.errorMessage = ` As senhas não conferem!`;
  }
  return validator;
}
