const textoUsuario = prompt("Introduce un texto para encontrar su primera vocal:");

if (textoUsuario !== null) {
  const textoEnMinusculas = textoUsuario.toLowerCase();
  let primeraVocal = null;
  let posicion = -1;

  for (let i = 0; i < textoEnMinusculas.length; i++) {
    const caracter = textoEnMinusculas[i];
    
    if ('aeiouáéíóú'.includes(caracter)) {
      primeraVocal = caracter;
      posicion = i;
      break;
    }
  }

  if (posicion !== -1) {
    document.write(`la vocal '${primeraVocal}' está en la posición ${posicion}`);
  } else {
    document.write("No se encontraron vocales en el texto introducido.");
  }
  
} else {
  document.write("Operación cancelada por el usuario.");
}