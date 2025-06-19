let numeroMaximo;
let esInputValido = false;

do {
  const numeroInput = prompt("Introduce un número para la pirámide (entre 1 y 50):");

  if (numeroInput === null) {
    
    break;
  }

  numeroMaximo = parseInt(numeroInput);

  if (isNaN(numeroMaximo) || numeroMaximo < 1 || numeroMaximo > 50) {
    alert("Número no válido. Por favor, introduce un número entre 1 y 50.");
  } else {
    
    esInputValido = true;
  }
} while (!esInputValido);



if (esInputValido) {
  for (let i = 1; i <= numeroMaximo; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea = linea + j;
    }
    document.write(linea + "<br>");
  }
} else {
  document.write("Operación cancelada por el usuario.");
}