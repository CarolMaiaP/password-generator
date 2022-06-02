let sliderElement = document.querySelector("#slider");

let sizePassword = document.querySelector("#valor");

let buttonElement = document.querySelector("#button");
console.log(buttonElement);

let containerPassword = document.querySelector("#container-password");
console.log(containerPassword);

let password = document.querySelector("#password");
console.log(password);

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*";

let novaSenha = "";
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";

  for (i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  console.log(pass);
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
