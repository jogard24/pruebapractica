// Ejercicio 2: Actualización de inventario en tienda digital
// Enunciado analítico:
// Una tienda en línea requiere conocer el inventario actualizado de un producto. Se debe
// calcular el inventario final según la cantidad inicial, las unidades vendidas y las unidades
// recibidas en reposición. Además, se debe identificar si el inventario queda en estado crítico.
// Requerimientos:
// • Crear una función calcularInventario().
// • Usar operadores matemáticos.
// • Validar valores negativos con condicionales.

// • Indicar si el inventario es crítico (menor a 5 unidades).
// Entradas solicitadas por el programa:
// • Cantidad inicial.
// • Cantidad vendida.
// • Cantidad recibida.
// Salidas:
// • Inventario final.
// • Mensaje “Inventario crítico” o “Inventario estable”.


//Se crea la funcion de CalcularInventario().
function calcularInventario(inicial, vendidos, recibidos) {
    // Validar valores negativos
    if (inicial < 0 || vendidos < 0 || recibidos < 0) {
        return "Error: No se permiten valores negativos";
    }

    // Calcular inventario
    let inventarioFinal = inicial - vendidos + recibidos;

    // Validar resultado negativo
    if (inventarioFinal < 0) {
        return "Error: Inventario inválido (resultado negativo)";
    }

    // Evaluar estado
    let estado;
    if (inventarioFinal < 5) {
        estado = "Inventario crítico";
    } else {
        estado = "Inventario estable";
    }

    return {
        inFinal: inventarioFinal,
        est: estado
    };
}

// Entradas (simuladas)
let inicial = parseInt(prompt("Cantidad inicial:"));
let vendidos = parseInt(prompt("Cantidad vendida:"));
let recibidos = parseInt(prompt("Cantidad recibida:"));

// Llamado
let resultado = calcularInventario(inicial, vendidos, recibidos);



// Salida
if (typeof resultado === "string") {
    alert(resultado);
} else {
    alert(`inventario final: ${resultado.inFinal}`);
    alert(`Estado: ${resultado.est}`);
}