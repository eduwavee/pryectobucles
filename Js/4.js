let suma = 0;
let continuar;

do {
  const inputUsuario = prompt("Introduce un número para sumar:");

  if (inputUsuario === null) {
    
    continuar = false;
  } else {
    const numero = parseFloat(inputUsuario);

    if (isNaN(numero)) {
      alert("'" + inputUsuario + "' no es un número válido.");
    } else {
      suma = suma + numero;
    }
    
    
    continuar = confirm("¿Deseas introducir otro número?");
  }
} while (continuar);

alert("La suma total es: " + suma);