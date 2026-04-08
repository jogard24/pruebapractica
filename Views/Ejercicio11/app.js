
// La función que aplica destructuración
function generarResumen(mensaje) {

    // 1. Usamos destructuring para extraer las propiedades en una sola línea
    const { remitente, contenido, fecha } = mensaje;

    // 3. Retornamos el mensaje destruturado
    return `Resumen del Mensaje:
    -----------------------
    De: ${remitente}
    Dice: ${contenido}
    Fecha: ${fecha}`;
}

// --- Prueba del sistema ---

const mensajeRecibido = {
    remitente: "Juan Pérez",
    contenido: "Hola, como estas",
    fecha: "2026-04-08",
    leido: false,
    prioridad: "alta"
};

const reporte = generarResumen(mensajeRecibido);

// Usamos alert para mostrar el menaje
alert(reporte);
console.log(reporte);