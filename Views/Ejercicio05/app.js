// Ejercicio 5: Validación de usuario y permisos
// Enunciado analítico:
// Un sistema debe validar si un usuario puede acceder y qué permisos posee según su rol.
// El programa recibirá los datos del usuario y evaluará si está activo y qué tipo de acceso
// corresponde a su rol.
// Requerimientos:
// • Crear una función validarUsuario().
// • Usar operadores lógicos y condicionales.
// • Evaluar roles: admin, editor y lector.
// • Retornar nivel de acceso.
// Entradas:
// • Nombre.
// • Estado (activo/inactivo).
// • Rol.
// Salidas:
// • Permisos asignados según el rol.
// • Mensaje de acceso permitido o denegado.


//se crea la funcion validarUsuario que recibe tanto el estado del usuario como el rol
function validarUsuario( estado, rol){

    //Se hace una condicial para  verificar si el estado del usuario
    //En caso de que el usuario este activo
    if (estado === "activo"){

        //Se verifica si el rol que tiene el usuario es admin, editor o lector, de ser asi tiene acceso caso contrario no tiene acceso
        return rol == "admin" || rol == "editor" || rol == "lector" ? `Acceso permitido, su rol es ${rol}` : "Rol no reconocido, acceso denegado";

    }
    //En caso de que el usuario este inactivo se deniega el acceso sin importar el rol
    else if (estado === "inactivo"){

        return "Acceso denegado, usuario inactivo";
    }    


}


let nombre = prompt("Validacion de Usuario \nIngrese su nombre: ");

let estado = prompt("Ingrese su estado Actual (activo/inactivo):").toLowerCase();

let Rol = prompt("Ingrese su rol (admin/editor/lector)")


let Resultado = validarUsuario(estado, Rol);

alert(Resultado);