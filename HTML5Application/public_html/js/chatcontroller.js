/* 
Script chat controlle 

 */
//sirve para importar la clase mensaje y que sepa que es lo que tiene que utilizar.
import {Mensaje} from './Mensaje.js'
/**Array de mensaje*/ // variable global

var mensajes=new Array();
/**
 * muestra todos los mensajes del paramentro  
 * pagina de forma de texto dentro del div 
 * @param {type} mensajes de coleccion para mostrar los mensajes 
 * @returns {undefined}
 */
function actualizarMensajes(mensajes){
    // ordenar los mensajes por fecha de mensaje de forma 
    // mas reciente a mas antiguo. 
    
    // despues recorremos la coleccion de mensajes
    
            // en cada iteracion añadimos al elemento <DIV> contenido 
            // consistente en el texto del mensaje, dentro de un elemento<li> 
            
            }    
   
   
/**
 * funcion que recoje los mensajes del uysuario y lo manda a la coleccion.
 * pagina de forma de texto dentro del div 
 
 * @returns {undefined}
 */         
            
            
 function enviarMensaje(){
     // Recibe el texto del usuario 
     let mensaje=document.getElementById("msgText").value;
     
     // lo añades a la coleccion de mensaje con la hora push introducir en el arry 
     //pop sacar del array.
     mensajes.push(new Mensaje (mensaje, new Date()));
     
     //limpar la caja de texto despues de enviar el mensaje 
     document.getElementById("msgText").value="";
     
     //enfocamos la caja de texto del mensaje 
     document.getElementById("msgText").focus();
 }
    
//MANEJADORES DE EVENTOS.
//asocio la funcion actualizar mensaje como manejadora del eveento .
//Dom de la pagina. 
//el dom es cuando cargas la pagina por primera vez

document.addEventListener("DOMContentloaded", actualizarMensajes());

//asocio la funcion ennviar mensaje como manejadora del evento.
//click del evento send buttonn. 
document.getElementById("sendButton").addEventListener('click', enviarMensaje);