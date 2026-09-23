/* 
Script chat controlle 

 */
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
 * @param {type} mensaje de para añadir a la colecicon 
 * @returns {undefined}
 */         
            
            
 function enviarMensaje(mensaje){
     // Recibe el texto del usuario 
     let mensaje=document.getElementById("msgText").value;
     
     // lo añades a la coleccion de mensaje con la hora 
     mensajes.add(new mensaje (mensaje,Date.now()));
     
     
     
 }
    


//asocio la funcion actualizar mensaje como manejadora del eveento .
//Dom de la pagina. 

document.addEventListener("DOMContentloaded", actualizarMensajes());

//asocio la funcion ennviar mensaje como manejadora del evento.
//click del evento send buttonn. 
document.getElementById("senddbutton").addEventListenner('click', enviarMensaje);