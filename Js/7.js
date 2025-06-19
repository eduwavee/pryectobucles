const numeroInput = prompt("Introduce un número para la pirámide (entre 1 y 50):");
const numeroMaximo = parseInt(numeroInput);

if (isNaN(numeroMaximo)) {
  alert("El valor introducido no es un número válido.");
} else if (numeroMaximo < 1 || numeroMaximo > 50) {
  alert("El número debe estar en el rango de 1 a 50.");
} else {
  for (let i = numeroMaximo; i >= 1; i--) {
    const linea = String(i).repeat(i);
    document.write(linea + "<br>");
  }
}