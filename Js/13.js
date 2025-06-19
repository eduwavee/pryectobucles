const textoUsuario = prompt("Introduce un texto para pasarlo a mayúsculas:");

if (textoUsuario !== null) {
  const textoEnMayusculas = textoUsuario.toUpperCase();
  document.write("El texto transformado es: <br>");
  document.write(textoEnMayusculas);
} else {
  document.write("Operación cancelada por el usuario.");
}