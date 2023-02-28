const fs = require ("fs"); // modulo nativo de node con distintas fuc¡nciones, es para poder leer el archivo.

let archivoTareas = {
    
    archivo: "tareas.json",
    leerArchivo: function (){
       // el utf-8 es para que lea letras y simbolos. En this.archivo tambien puede ir "./tareas.json", pero queda menos generico
       // leo el archivo y lo guardo en la variable archivo
        let archivo = fs.readFileSync (this.archivo, "utf-8"); 
        return JSON.parse(archivo);

    },

    escribirJSON : function(arrayDeTareas){
        // En nuevaTarea guardo el array convertido a version .json
        let nuevaTarea = JSON.stringify(arrayDeTareas, null, " ");
        // Lo guardo en el archivo tareas,json
        fs.writeFileSync (this.archivo, nuevaTarea, "utf-8");
       
    }, 

    guardarTarea: function(titulo){
        // Defino la variable tareas con el array de tareas completo usando la funcion listar definida mas arriva
        let tareas = this.leerArchivo();
        // Defino el objeto nueva tarea con el titulo ingresado por consola y estado "pendiente"
        let nuevaTarea = {
            titulo : titulo,
            estado : "pendiente"
        };
        // meto el objeto nuevo en el array
        tareas.push(nuevaTarea);

        // Guardo los cambios en el archivo .json con una funcion ya definida tambien.
        this.escribirJSON(tareas);

    }
    };  

module.exports = archivoTareas; // exporta el modulo

