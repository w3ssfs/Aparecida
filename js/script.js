const btnAdicionar = document.querySelector("#adicionar-paciente");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var tdPeso = pacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes[i].querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
    pacientes[i].classList.add("campo-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    pacientes[i].classList.add("campo-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calcularImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calcularImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
