const textoUsuario = prompt("Introduce un texto para invertirlo:");

if (textoUsuario !== null) {
  const textoInvertido = textoUsuario.split('').reverse().join('');
  
  document.write(textoInvertido);
} else {
  document.write("Operación cancelada por el usuario.");
}