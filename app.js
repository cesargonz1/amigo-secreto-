// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    // Obtener el valor del input
    let nombre = document.getElementById("amigo").value;

    // Si el input no está vacío, agregar el nombre al array
    if (nombre) {
        nombres.push(nombre);

        // Mostrar la lista actualizada
        mostrarNombres();

        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar la lista de nombres en el HTML
function mostrarNombres() {
    // Obtener el elemento de la lista (ul)
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de mostrar los nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un item de lista (li)
    nombres.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
function sortearAmigo(){

    let amigoSorteado = Math.floor(Math.random() * nombres.length);

let resultado = nombres[amigoSorteado];
document.getElementById("resultado").textContent = (`tu amigo secreto es ${resultado}`);


listaAmigos.innerHTML = '';


}


