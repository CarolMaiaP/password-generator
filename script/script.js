let sliderElement = document.querySelector("#slider");
console.log(sliderElement);

let sizePassword = document.querySelector("#valor");
console.log(sizePassword);

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};
