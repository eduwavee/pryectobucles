const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

do {
  const dniInput = prompt("Introduce tu número de DNI (sin la letra) o pulsa 'Cancelar' para salir:");

  if (dniInput === null) {
    
    break;
  }

  
  if (dniInput.trim() === "") {
    alert("No has introducido un DNI. Inténtalo de nuevo.");
    continue; 
  }

  const numeroDNI = parseInt(dniInput);

 
  if (isNaN(numeroDNI)) {
    alert("'" + dniInput + "' no es un número válido.");
  } else if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("El número de DNI debe estar entre 0 y 99,999,999.");
  } else {
    
    const posicion = numeroDNI % 23;
    const letraCalculada = letras.charAt(posicion);
    alert("El número de DNI " + numeroDNI + " corresponde a la letra: " + letraCalculada);
  }

} while (true);

alert("Gracias por utilizar el programa.");