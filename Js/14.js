const textoUsuario = prompt("Introduce un texto para separar sus caracteres:");

if (textoUsuario !== null) {
  let textoConGuiones = "";
  let i = 0;

  while (i < textoUsuario.length) {
    const caracter = textoUsuario.charAt(i);
    textoConGuiones = textoConGuiones + caracter + "-";
    i++;
  }
  
  const resultadoFinal = textoConGuiones.slice(0, -1);
  document.write(resultadoFinal);
  
} else {
  document.write("Operación cancelada por el usuario.");
}