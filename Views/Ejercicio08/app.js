
// Funcion principal que usa el callback

function buscarCursos (curso, callback){

    return curso.filter(callback)

}

// Entrada de datos

//1. Preguntar por la cantidad de cursos

let CantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos: "));

let cursos = [];

// 2. Preguntar los datos de cada curso
for (let i = 1; i <= CantidadCursos; i++){

    let NombreCurso = prompt("Ingrese el nombre del curso #" + i).toLowerCase();
    let Categoria = prompt("Ingrese la categoria del curso #" + i).toLowerCase();

    //De esta forma agrupamos los datos tando NombreCurso como Categoria
    cursos.push({nombreCurso: NombreCurso, categoria: Categoria});
}

//3. Que el usuario Seleccione el criterio de busqueda

let opcion = parseInt(prompt(" Los criterios de busqueda son \n1.Por nombre \n2.Por Categoria Seleccione alguno de los criterios de busqueda anteriormente mostrados"));

let criterioBusqueda = prompt("Ingrese lo que va a buscar: ");

// Definiendo los criterios de la busqueda

//para definir los criterios de bsqueda con ayuda de una funcion flecha vamos a verificar cada llave del elemento para ser buscada
const porCategoria = (curso) => curso.categoria.toLowerCase() === criterioBusqueda.toLowerCase();
const porNombre = (curso) => curso.nombreCurso.toLowerCase().includes(criterioBusqueda.toLowerCase());


let resultados = []

if (opcion == 1){

    resultados = buscarCursos(cursos, porNombre);    
}
else if (opcion == 2){

    resultados = buscarCursos(cursos, porCategoria);
}
else{

    prompt("La opcion ingresada no es valida");
}

// Imprimir resultados

if (resultados.length > 0){
    alert("Los cursos encontrados son: \n");
    for (let cursos of resultados){

        alert(`${cursos.nombreCurso}\n${cursos.categoria}`);
    }
}

else{
    alert("No hay resultados con respecto a la busqueda")
}