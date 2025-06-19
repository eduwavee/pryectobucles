let resultado = "";
let textoIngresado;

while (true) {
  textoIngresado = prompt("Introduce un texto (o pulsa 'Cancelar' para finalizar):");

  if (textoIngresado === null) {
    break;
  }

  resultado = resultado + textoIngresado + " - ";
}

if (resultado !== "") {
  // Quitamos el último " - " que sobra al final
  const resultadoFinal = resultado.slice(0, -3);
  alert(resultadoFinal);
} else {
  alert("No se introdujo ningún texto.");
}