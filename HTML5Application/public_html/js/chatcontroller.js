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
 
 */
function actualizarMensajes(){
    // ordenar los mensajes por fecha de mensaje de forma 
    // mas reciente a mas antiguo reverse para re-ordenar los mensajes. 
    mensajes.reverse();
    
    //obtenemos y limpiamos la lista del mensajes eso es el UL .
     const listMsgs = document.getElementById("msgList");
     
    while (listMsgs.firstChild) {
    listMsgs.removeChild(listMsgs.firstChild);
}
    // despues recorremos la coleccion de mensajes un array dentro de js 
    for(let i = 0 ;i<mensajes.length;i++){
         console.log(mensajes[i]);
         
            // en cada iteracion añadimos al elemento <DIV> contenido 
            // consistente en el texto del mensaje, dentro de un elemento<li>
           
             // creo el elemento li para que no me salga en el HTML
           const newLi = document.createElement("li");
           
           // le meto contenido y hay que añadir hora.
           const newContent = document.createTextNode(mensajes[i].text+"   "
             +new Intl.DateTimeFormat("es-ES").format(mensajes[i].dateTime.getTime()));
           
           // creo el hijo para que herede el contenido     
           newLi.appendChild(newContent);
           
           //le añado el elemento y el contenido al DOM 
           // es msglist porque en el HTML lo hemos deginido en el ID.
           //null me lo pone a continuacin del siguente LI 
            listMsgs.insertBefore(newLi, null);
         

    }
           
            
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
     
     //actualizamos la lista de mensaje 
     actualizarMensajes();
 }
 
    
//MANEJADORES DE EVENTOS.
//asocio la funcion actualizar mensaje como manejadora del eveento .
//Dom de la pagina. 
//el dom es cuando cargas la pagina por primera vez

document.addEventListener("DOMContentloaded", actualizarMensajes());

//asocio la funcion ennviar mensaje como manejadora del evento.
//click del evento send buttonn. 
document.getElementById("sendButton").addEventListener('click', enviarMensaje);