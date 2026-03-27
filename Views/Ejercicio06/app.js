// Ejercicio 6: Cálculo modular de nómina

// Se define la funcion calcularSalarioBase para que esta multiplique el costo de la hora 
// por la cantidad de horas trabajadas retornando el salario Bruto en este caso llamado salarioBase.

function calcularSalarioBase(valorHora, horasTrabajadas) {
    const salarioBase = valorHora * horasTrabajadas;
    return salarioBase;
}

function calcularDeducciones(salarioBase) {
    const Salud = 0.04;   // La tasa de la nomina de decucion de salud es de 4 %
    const Pension = 0.04;   // La tasa de la nomina de decucion de pensión es 4 %

    //Calcula el monto que se va a descontar.
    const deduccionSalud = salarioBase * Salud; 
    const deduccionPension = salarioBase * Pension;

    // Suma los descuentos en una sola variable.
    const totalDeducciones = deduccionSalud + deduccionPension;

    //Retorna el monto que se va a restar del sueldo.
    return totalDeducciones; 
}

// Función para calcular el balance final de la nómina.
function calcularNeto(salarioBase, totalDeducciones) {
    // Añade los descuentos al salario base (Bruto - Deducciones).
    const salarioNeto = salarioBase - totalDeducciones; 
    return salarioNeto; // Retorna la cantidad real que recibira el trabajador.
}

//Pide al usuario que ingrese el precio de la hora y lo convierte de texto a número.
const valorHora = parseFloat(prompt("Ingrese el valor del pago por hora:"));

//Pide al usuario que ingrese la cantidad de horas que trabajo y asegura que el dato sea numerico.
const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));

const base = calcularSalarioBase(valorHora, horasTrabajadas); // Ejecuta la primera funcion
const deducciones = calcularDeducciones(base); // Ejecuta la segunda funcion
const neto  = calcularNeto(base, deducciones); //Ejecuta la tercera funcion

//Imprime los resultados en la pantalla
alert(
  "CÁLCULO MODULAR DE NÓMINA:\n" +
  "Salario base: $" + base        + "\n" +
  "Total deducciones: $" + deducciones + "\n" +
  "Salario neto: $" + neto
);