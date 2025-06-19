const edadInput = prompt("Por favor, introduce tu edad:");
const edad = parseInt(edadInput);


if (!isNaN(edad) && edad > 0) {
    if (edad >= 18) {
    alert("¡Excelente! Ya tienes edad para conducir.");
  } else {
    alert("Aún no tienes la edad mínima para conducir.");
  }
} else {
  
  alert("El valor introducido no es una edad válida. Por favor, introduce un número.");
}