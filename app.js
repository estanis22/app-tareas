// trae la variable archivoTareas que prepare en el archivo funcionesDeTareas.js
const archivoTareas = require ("./funcionesDeTareas"); 


// permite agregar una tercera palabra a la taerminal node app.js NUEVO, para ejecutar
let accion = process.argv[2]; 

switch (accion){
    case "listar" :
    // se va guardando en la variable tareas usando la funcion generada en el objeto (metodo leerArchivo) del archivo funcionDeTareas.js
    let tareas = archivoTareas.leerArchivo(); 
    tareas.forEach(function(valor, index){
        console.log (("Tarea " + (index + 1) + ": " + valor.titulo + ", " + valor.estado ))

    });
    break;

    case "crear" :

    // uso la funcion declarada en el objeto de la otra hoja.
     archivoTareas.guardarTarea(process.argv[3]);
     break;

    case undefined : 
    console.log ("Atencion - Tienes que pasar una accion.");
    break;

    default :
    console.log ("No entiendo que quieres hacer");
    break;
};


