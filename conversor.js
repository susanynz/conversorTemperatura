function convertirTemperatura() {
    while (true) {
      // Solicitar al usuario la temperatura con prompts
      let entrada = prompt("Ingrese la temperatura en grados Celsius (escriba 'salir' cuando quiera finalizar):");
  
      // Verificar si el usuario quiere salir
      if (entrada.toLowerCase() === 'salir') {
        console.log("Saliendo del programa.");
        break; // Salir del bucle
      }
  
      // Verificar si la entrada es un número
      if (!isNaN(entrada)) {
        // Convertir la entrada a número
        let temperaturaCelsius = parseFloat(entrada);
  
        // Calcular grados Fahrenheit
        let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
  
        // Calcular grados Kelvin
        let temperaturaKelvin = temperaturaCelsius + 273.15;
  
        // Mostrar resultados
        alert(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} y Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
        console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
        console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
      } else {
        // Mostrar mensaje de error si la entrada no es un número
        alert("Por favor, ingrese un número válido.");
      }
    }
  }
  
  // Llamar a la función para probar el programa
  convertirTemperatura();
  