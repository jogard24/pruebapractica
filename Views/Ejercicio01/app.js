// Enunciado analítico:
// Un instructor desea verificar la asistencia de sus aprendices a una sesión. Para ello
// dispone de una lista de estudiantes inscritos y necesita validar si un nombre ingresado por
// el usuario corresponde a un aprendiz registrado. El programa debe confirmar la asistencia
// o reportar que el aprendiz no está inscrito.
// Requerimientos:
// • Usar un arreglo donde se almacenen los nombres de los aprendices.
// • Aplicar un método de búsqueda (find, includes o filter).
// • Crear una función que reciba el arreglo y el nombre a validar.
// • Retornar si el aprendiz está inscrito o no.
// Entradas solicitadas por el programa:
// • Cantidad de aprendices.
// • Nombre de cada aprendiz.
// • Nombre a validar.
// Salidas:
// • Mensaje indicando si el aprendiz está inscrito o no.

//Se crea la function Validar nommbre que recibe tanto el arreglo de estidiantes como el estudiante a verficar 
function validarNombre(estudiantes, nombre){

    //Se usa el metodo includes para verficar si el nombre ingresado se encuentra en el array
    if (estudiantes.includes(nombre)) {

        //Si se encuentra el nombre retorna el siguiente mensaje
        return "El aprendiz esta inscrito";
    }
    else {
        //en caso de que no lo encuentre devuelve lo siguiente
        return "El aprendiz no esta inscrito";
    }
}

//Se crea una array vaciaque almacenara los nombre de los estudiantes
let CantidadEstudiantes = [];

//La variable cantidad almacene el numero de estudiantes que ingresa el usuario
let cantidad =  parseInt(prompt("Ingrese la cantidad de estudiantes"));

//Se crea un ciclo for el cual se repetira segun la cantidad ingresada por el usuario
for (let i = 1; i <= cantidad; i++){

    //En cada ciclo se solicita el nombre del estudiante
    let nombre = prompt(`Ingrese el nombre del estudiante ${i}: `).toLowerCase();

    //Cada nombre ingresado se alamcena en la lista CantidadEstudiantes 
    CantidadEstudiantes.push(nombre);
}

//Se solicita el nombre del estudiante a validar
let NombreValidar = prompt("Verficacion de Estudiantes \nIngrese el nombre del aprendiz a validar: ").toLowerCase();

//Se llama a la funcion validar nombre y se pasa los parametros, el resultado se almacena en la variable Resultado
let Resultado = validarNombre(CantidadEstudiantes, NombreValidar);

//Se muestra el resultado final al usuario
alert(Resultado);
