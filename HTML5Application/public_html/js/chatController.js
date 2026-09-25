/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
       
/*esta funcion muestra los mensajes del parametro
 * en un pagina en forma de texto dentro 
 * @param {type} mensaje
 * @returns {undefined}
 */

    //ordenar mensaje por fecha de mensaje de forma 
    //que siempre sea de reciente a antiguo(en cada actualizacion)
    //let lista = document.getElementById("msgList");
    //lista.innerHTML = "";
    //let item = document.createElement("li");
    //item.textContent = mensaje[i].texto;
    //lista.appendChild(item);
    
//importar la clase mensaje
import {Mensaje} from './mensaje.js'
//ARRAY DE MENSAJES
//declarar variable var,let,const(no se puede reafirmar)
var mensaje = new Array(); 
    //en cada iteraccion añadimos al elemento <div> contenido   
    //consiste en el tecto del mensaje dentro de un elemeto(dinamico)
    function actualizarMensajes() {   
        const listMsgs = document.getElementById("msgList");
        while (listMsgs.firstChild) {
            listMsgs.removeChild(listMsgs.firstChild);}
//recorrer la coleccion de mensajes(scroll)
        for (let i = 0; i < mensaje.length; i++) {
            const newli = document.createElement("li");
            const newCont = document.createTextNode(mensaje[i].texto + " " + mensaje[i].dateTime);
            
            newli.appendChild(newCont);
            const listMsgs = document.getElementById("msgList");
            listMsgs.insertBefore(newli, null);}
        
    }
    function enviarMensajes() {
//recibe el texto <textarea>
        let textoMensaje = document.getElementById("msgText").value;
//enviar el mensaje con la hora que se envia
//añades a la coleccion
        mensaje.push(new Mensaje(textoMensaje, new Date()));

        let escritura = document.getElementById("msgText");
        escritura.value = "";
        escritura.focus();
        actualizarMensajes();
    }
//asociar un listener
//cuando pulsas click en el boton se envia el mensaje
    document.getElementById("sendButton").addEventListener('click', enviarMensajes);
//asocio el add event   
//actualizar se asocia con el evento de carga del DOM de la pagina 
    document.addEventListener('DOMContentLoaded', actualizarMensajes(mensaje));