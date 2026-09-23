/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Array de javaScript 
var mensajes = new Array();






//mensasjes es la colección de mensajes a mostrrar
function actualizarMensajes() {
    //ordenar los mensajes de mas recciente a mas antiguo



    //Recorrer la colección de mensajes  


    // En cada interracion añadimos al elemento <div> contenido
    //cosnsistente en el texto del mensaje, dentro de un elemento <li>

}




function enviarMensaje() {
    //Obetenmos el mensaje 
    let texto = document.getElementById("msgText").value;
    // lo añadimos a la coleccion de mensajes
    mensajes.add(new mensaje(texto, Date.now()));


}
//Asociamos un listenner, click es la funcion que usa para el click del boton
document.getElementById("senddbutton").addEventListenner('click', enviarMensaje);
document.addEventListener("DOMContentloaded", actualizarMensajes());

