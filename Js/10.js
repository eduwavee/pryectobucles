const filasInput = prompt("Introduce el número de filas:");
const columnasInput = prompt("Introduce el número de columnas:");

const filas = parseInt(filasInput);
const columnas = parseInt(columnasInput);

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
  alert("Has introducido un valor no válido. Por favor, usa números enteros y positivos.");
} else {
  let contador = filas * columnas;

  document.write('<table border="1">');

  for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) {
      document.write("<td>" + contador + "</td>");
      contador--;
    }
    document.write("</tr>");
  }
  
  document.write("</table>");
}