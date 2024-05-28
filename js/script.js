function agregarTarea() {
    //1 obtener el valor del campo de la tarea
    let nuevaTareaText = document.getElementById("nuevaTarea").value;
//2 validar que no este vacio
    if (nuevaTareaText === "") {
        return alert("Ingrese una tarea");
    }

//3 Crear elemento en la lista
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaText + " "; //el espacio para que el btn eliminar no este pegado a la lista

//4 Crear boton eliminar
    let botonEliminar = document.createElement("button") //se crea ene le DOM btn eliminar
    botonEliminar.textContent = "Eliminar"; //se agrega el texto Eliminar
    botonEliminar.onclick = function() {nuevaTarea.remove();} //al hacer click en el btn se ejecuta el metodo remove que elimina elementos del DOM

//5 asignar el btn eliminar al un elemento de la lista  
//Agregar btn aliminar al elemento de la lista con appendClhild
//del DOM toma un elemento Padre y agrega un elemento hijo que depende del padre
//elemento padre (elemento que agregamos en la lista) elemento hijo (botonEliminar)
//elemento padre (nuevaTarea) elemento hijo (botonEliminar)
    //Padre                     hijo
    nuevaTarea.appendChild(botonEliminar);

//6 agregar elemento/tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

 //7 limpiar el cuadro de texto input
    document.getElementById("nuevaTarea").value = "";
 
}