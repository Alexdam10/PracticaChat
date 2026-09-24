/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//Importamos la clase de mensaje para que la pueda usar y se combierte en un modulo 
import {mensaje} from './mensaje.js'

//Array de javaScript 
        var mensajes = new Array();
//mensasjes es la colección de mensajes a mostrrar

function actualizarMensajes() {
    //alert("Estas dentro de actualizar");
    //ordenar los mensajes de mas recciente a mas antiguo

    //Localizamos el elemento donde vamos a poner la ista de los mensajes
    let lstUl = document.getElementById("msglist");
    //Sirve para limpiar el ul cada vez q   ue hacemos una interración con el bucle
    lstUl.innerHTML = "";
    //Nos creamos un documento li para poder escribir lo q tenemos guardado en el array



    //Recorrer la colección de mensajes  
    /*  for (let msg of mensajes) {
     
     //Llamamos al onbejto li para poder escribir el array en el cuadro 
     li.textContent = msg.gettexto + "  " + msg.getfecha;
     
     lstUl.appendChild(li);
     console.log(msg.texto + "  " + msg.fecha);
     //Recorremos el array de manera inversa
     //Primero tenemos q saber cuantas posiciones tiene
     
     }*/

    let contArray = mensajes.length;
    console.log("Este es el valor de array " + contArray);
    for (var i = contArray - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = mensajes[i].gettexto + " " + mensajes[i].getfecha;
        lstUl.appendChild(li);
        console.log("hola");
    }

    // En cada interracion añadimos al elemento <div> contenido
    //cosnsistente en el texto del mensaje, dentro de un elemento <li>

}




function enviarMensaje() {
    //Obetenmos el mensaje 
    let texto = document.getElementById("msgText").value;

    // lo añadimos a la coleccion de mensajes
    // mensajes.push(new mensaje(texto, Date.now()));
    //Array de javi de clase
    mensajes.push(new mensaje(texto, new Date()));
    //HAcemos un atributo con el text area y lo limpiamos con el value
    let escritura = document.getElementById("msgText");
    //Lo usamos para limpiar la escritura cada vez q le damos al boton de enviar
    escritura.value = "";
    escritura.focus();
    /*for (let msg of mensajes) {
     //alert("Estas dentro del bucle");
     //console.log(msg.texto + "  " + msg.fecha);
     
     }*/

    actualizarMensajes();
}
//Asociamos un listenner, click es la funcion que usa para el click del boton
document.getElementById("sendbutton").addEventListener('click', enviarMensaje);

//DOMContentloaded Cada vez q cargar o actualizas la pagina salta esta acción y llama a la función
document.addEventListener("DOMContentloaded", actualizarMensajes());

