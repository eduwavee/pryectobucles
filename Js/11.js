const nombre1 = prompt("Introduce el nombre de la primera persona:");
const edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ":"));

const nombre2 = prompt("Introduce el nombre de la segunda persona:");
const edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ":"));

const nombre3 = prompt("Introduce el nombre de la tercera persona:");
const edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ":"));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
  document.write("Debe ingresar edades válidas.");
} else {
  const mayorEdad = Math.max(edad1, edad2, edad3);
  let nombreMayor;

  if (mayorEdad === edad1) {
    nombreMayor = nombre1;
  } else if (mayorEdad === edad2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }
  
  document.write("La persona de mayor edad es " + nombreMayor + " con " + mayorEdad + " años.");
}