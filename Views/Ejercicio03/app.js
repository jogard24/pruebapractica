
//Ejercicio 3: Análisis de calificaciones de un aprendiz.

function calcularpromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    const promedio = suma / notas.length;
    let rendimiento = "";

    if ( promedio > 9) {
        rendimiento = "Alto";}

    else if ( promedio > 6.5) {
        rendimiento = "Medio";
    } 
    else {
        rendimiento = "Bajo";
    }

    return { promedio, rendimiento };
}

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));

if (cantidadNotas > 0) {
    let notas = [];

    for (let i = 1; i <= cantidadNotas; i++) {
        
        let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
        notas.push(nota);
    }

    let resultado = calcularpromedio(notas);

    alert(`resultado final: Promedio = ${resultado.promedio}, Rendimiento = ${resultado.rendimiento}`);
} 
else {
    alert("La cantidad cantidad ingresada no es valida.");
}