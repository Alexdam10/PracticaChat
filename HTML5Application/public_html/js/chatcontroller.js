/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Array de javaScript 
var mensajes = new Array();
//mensasjes es la colección de mensajes a mostrrar

function actualizarMensajes() {
    alert("Estas dentro de actualizar");
    //ordenar los mensajes de mas recciente a mas antiguo




    //Localizamos el elemento donde vamos a poner la ista de los mensajes
    let lstUl = document.getElementById("msglist");
    lstUl.innerHTML = "";



    //Recorrer la colección de mensajes  
    for (let msg of mensajes) {
        //Nos creamos un documento li para poder escribir lo q tenemos guardado en el array
        let li = document.createElement("li");
        li.textContent = msg.texto + "  " + msg.fecha;
        //
        lstUl.appendChild(li);
        console.log(msg.texto + "  " + msg.fecha);


    }

    // En cada interracion añadimos al elemento <div> contenido
    //cosnsistente en el texto del mensaje, dentro de un elemento <li>

}




function enviarMensaje() {
    //Obetenmos el mensaje 
    let texto = document.getElementById("msgText").value;

    // lo añadimos a la coleccion de mensajes
    mensajes.push(new mensaje(texto, Date.now()));

    for (let msg of mensajes) {
        //alert("Estas dentro del bucle");
        //console.log(msg.texto + "  " + msg.fecha);

    }

    actualizarMensajes();
}
//Asociamos un listenner, click es la funcion que usa para el click del boton
document.getElementById("sendbutton").addEventListener('click', enviarMensaje);
document.addEventListener("DOMContentloaded", actualizarMensajes());

