# app-tareas
Esta es una aplicación que te permite crear y listar tareas. Está basada en un archivo tareas.json que contiene un array de objetos, donde cada objeto representa una tarea con título y estado.

## Funciones
La app cuenta con las siguientes funciones:

### listar
Esta función permite mostrar por consola todas las tareas registradas en el archivo tareas.json.

node app.js listar
### crear
Esta función permite crear una nueva tarea. Debe especificarse el título de la tarea como argumento.

node app.js crear "Título de la nueva tarea"
## Archivos
La app está compuesta por los siguientes archivos:

### tareas.json
Este archivo es un array de objetos que contiene todas las tareas registradas en la app.

### funcionesDeTareas.js
Este archivo contiene la lógica de la app. Define un objeto archivoTareas con las siguientes funciones:

#### leerArchivo(): 
lee el archivo tareas.json y devuelve su contenido como un array de objetos.
### escribirJSON(arrayDeTareas): 
recibe un array de objetos y lo guarda en el archivo tareas.json.
#### guardarTarea(titulo): 
recibe el título de una nueva tarea y la agrega al archivo tareas.json.
### app.js
Este archivo es el punto de entrada de la app. Se encarga de recibir los argumentos de la consola y llamar a las funciones correspondientes del archivo funcionesDeTareas.js.

## Ejemplo
### node app.js listar
Para listar todas las tareas registradas.

### node app.js crear "Comprar leche"
Para crear una nueva tarea con título "Comprar leche".

# app-tareas
This is an application that allows you to create and list tasks. It is based on a tareas.json file that contains an array of objects, where each object represents a task with a title and a status.

## Functions
The app has the following functions:

### listar
This function allows you to display all the tasks registered in the tareas.json file on the console.

node app.js listar

### crear
This function allows you to create a new task. The title of the task must be specified as an argument.

node app.js crear "Title of the new task"

## Files
The app consists of the following files:

### tareas.json
This file is an array of objects that contains all the tasks registered in the app.

### funcionesDeTareas.js
This file contains the logic of the app. It defines an object tasksFile with the following functions:

#### leerArchivo():
reads the tareas.json file and returns its contents as an array of objects.

#### escribirJSON(arrayDeTareas):
receives an array of objects and saves it to the tareas.json file.

#### guardarTarea(titulo):
receives the title of a new task and adds it to the tareas.json file.

### app.js
This file is the entry point of the app. It is responsible for receiving console arguments and calling the corresponding functions from the funcionesDeTareas.js file.

## Example
### node app.js listar 
To list all the registered tasks.

### node app.js crear "Buy milk"
To create a new task with the title "Buy milk".
