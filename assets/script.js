const img = document.querySelector("#perro img");

img.addEventListener("click", () => {
  if (img.style.border) {
    img.style.border = "";
  } else {
    img.style.border = "2px solid black";
  }
});

const primero = document.querySelector("#primero");
const segundo = document.querySelector("#segundo");
const tercero = document.querySelector("#tercero");

const botonEnviar = document.querySelector("#enviar");
const resultadoMensajeStickers = document.querySelector("#resultadoStickers");
const resultadoMensajePassword = document.querySelector("#resultadoPassword");

function calcularStickers() {
  const cantidadPrimero = primero.value;
  const cantidadSegundo = segundo.value;
  const cantidadTercero = tercero.value;

  const total = +cantidadPrimero + +cantidadSegundo + +cantidadTercero;

  if (total <= 10) {
    resultadoMensajeStickers.textContent = `Llevas ${total} stickers.`;
  } else {
    resultadoMensajeStickers.textContent = "Llevas demasiados stickers.";
  }
}
botonEnviar.addEventListener("click", calcularStickers);

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

const botonIngresar = document.querySelector("#ingresar");
const mensajeResultado = document.querySelector("#resultado");

function verificarPassword() {
  const password = select1.value + select2.value + select3.value;

  if (password === "911") {
    resultadoMensajePassword.textContent = "Password 1 correcto";
  } else if (password === "714") {
    resultadoMensajePassword.textContent = "Password 2 correcto";
  } else {
    resultadoMensajePassword.textContent = "Password incorrecto";
  }
}
botonIngresar.addEventListener("click", verificarPassword);
