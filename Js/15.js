const textoUsuario = prompt("Introduce una frase para contar sus vocales:");

if (textoUsuario !== null) {
  let contadorVocales = 0;
  const textoEnMinusculas = textoUsuario.toLowerCase();

  for (let i = 0; i < textoEnMinusculas.length; i++) {
    const caracter = textoEnMinusculas[i];

    if (
      caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
      caracter === 'á' || caracter === 'é' || caracter === 'í' || caracter === 'ó' || caracter === 'ú'
    ) {
      contadorVocales++;
    }
  }

  document.write("Tu texto tiene " + contadorVocales + " vocales.");

} else {
  document.write("Operación cancelada por el usuario.");
}