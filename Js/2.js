const notaInput = prompt("Introduce tu nota (del 0 al 10):");
const nota = parseInt(notaInput);

if (isNaN(nota)) {
  alert("Introduce un número válido");
} else {
  if (nota >= 0 && nota <= 10) {
    if (nota <= 2) {
      alert("Muy deficiente");
    } else if (nota <= 4) {
      alert("Insuficiente");
    } else if (nota <= 6) {
      alert("Suficiente");
    } else if (nota === 7) {
      alert("Bien");
    } else if (nota <= 9) {
      alert("Notable");
    } else if (nota === 10) {
      alert("Sobresaliente");
    }
  } else {
    alert("Número erróneo (la nota debe ser entre 0 y 10)");
  }
}