const formulario = document.getElementById("formulario");
const checkAcepto = document.getElementById("acepto");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const acepto = checkAcepto.checked;

  if (acepto == false) {
    resultado.innerHTML = "Aviso: debes aceptar los términos para continuar.";
  } else {
    resultado.innerHTML = "Términos aceptados. Puedes continuar.";
  }
});