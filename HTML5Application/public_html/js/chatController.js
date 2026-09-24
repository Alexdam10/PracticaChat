/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//importar la clase mensaje
import {Mensaje} from './mensaje.js'
//ARRAY DE MENSAJES
//declarar variable var,let,const(no se puede reafirmar)
var mensaje = new Array();
/*esta funcion muestra los mensajes del parametro
 * en un pagina en forma de texto dentro 
 * @param {type} mensaje
 * @returns {undefined}
 */
function actualizarMensajes() {
    //ordenar mensaje por fecha de mensaje de forma 
    //que siempre sea de reciente a antiguo(en cada actualizacion)

    //recorrer la coleccion de mensajes(scroll)
    //en cada iteraccion añadimos al elemento <div> contenido   
    //consiste en el tecto del mensaje dentro de un elemeto(dinamico)
}
function enviarMensajes() {
//recibe el texto <textarea>
    let textoMensaje = document.getElementById("msgText").value;
//enviar el mensaje con la hora que se envia
//añades a la coleccion
    mensaje.push(new Mensaje(textoMensaje, new Date()));
}
    //limpiar la caja 
    document.getElementById("msgText").value="";
    //enfocamos la caja
    document.getElementById("msgText").focus();
    
//asociar un listener
//cuando pulsas click en el boton se envia el mensaje
document.getElementById("sendButton").addEventListener('click', enviarMensajes);
//asocio el add event   
//actualizar se asocia con el evento de carga del DOM de la pagina 
document.addEventListener('DOMContentLoaded', actualizarMensajes(mensaje));