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
var msgDia = document.getElementById("msgDia");
let diaHoy = document.createElement("li");
let textoHoy = new Date().toLocaleDateString("es-ES",
        {weekday: "long", day: "numeric", month: "long", year: "numeric"});
;
diaHoy.textContent = textoHoy.charAt(0).toUpperCase() + textoHoy.slice(1);
msgDia.appendChild(diaHoy);
    

    
function actualizarMensajes() {
    // 1. Obtenemos la referencia a la lista <ul id="msgList"> del HTML
    const listMsgs = document.getElementById("msgList");

    // 2. Vaciamos la lista antes de volver a pintarla
    //    (si no, los mensajes se duplicarían cada vez que se llama a esta función)
    while (listMsgs.firstChild) {
        listMsgs.removeChild(listMsgs.firstChild);
    }

    // 3. Recorremos el array de mensajes para crear un <li> por cada uno
    for (let i = 0; i < mensaje.length; i++) {

        // Creamos el elemento <li> que contendrá el mensaje completo
        const newli = document.createElement("li");

        // --- Parte del texto del mensaje ---
        // Creamos un <span> solo para el texto escrito por el usuario
        const textoSpan = document.createElement("span");
        // textContent (no innerHTML) para que el texto se trate como texto plano,
        // nunca como HTML/código (evita problemas de seguridad tipo XSS)
        textoSpan.textContent = mensaje[i].texto;

        // --- Parte de la hora del mensaje ---
        // Creamos un <span> aparte para la hora, así podemos darle su propio estilo
        const horaSpan = document.createElement("span");
        // toLocaleTimeString() convierte el objeto Date en un texto de hora
        // legible según el idioma/región indicado ('es-ES'),
        // en vez del formato largo por defecto (día, fecha, hora, zona horaria)
        horaSpan.textContent = " " + mensaje[i].dateTime.toLocaleTimeString('es-ES', {
            hour: '2-digit',   // fuerza dos dígitos, ej: "09" en vez de "9"
            minute: '2-digit'
        });
        

        // Estilos aplicados directamente al span de la hora:
        horaSpan.style.fontSize = "0.75rem";   // letra más pequeña que el texto del mensaje
        horaSpan.style.color = "#888";         // gris, para que no compita visualmente con el texto
        horaSpan.style.marginLeft = "0.5rem";  // separación respecto al texto del mensaje

        // 4. Montamos el <li>: primero el texto, luego la hora
        newli.appendChild(textoSpan);
        newli.appendChild(horaSpan);

        // 5. Insertamos el <li> ya completo dentro de la lista <ul>
        listMsgs.appendChild(newli);
    }}
    // Bajamos el scroll hasta el final para ver siempre el último mensaje
        const contenedor = document.getElementById("msgContainer");
        contenedor.scrollTop = contenedor.scrollHeight;

    
    
    function enviarMensajes() {
//recibe el texto <textarea>
        let textoMensaje = document.getElementById("msgText").value;
      
      
        if (texto.length ===0){
        return;
    }
//enviar el mensaje con la hora que se envia
//añades a la coleccion
        mensaje.push(new Mensaje(textoMensaje, new Date()));

        let escritura = document.getElementById("msgText");
        escritura.value = "";
        escritura.focus();
        actualizarMensajes();
    }




 function emoticono(){
   
    console.log("emoticono cargada");

    const emojiButton = document.getElementById("emojiButton");
    const emojiPanel = document.getElementById("emojiPanel");
    const msgText = document.getElementById("msgText");

    emojiButton.addEventListener("click", function () {
        emojiPanel.style.display = (emojiPanel.style.display === "none") ? "flex" : "none";
    });

    emojiPanel.querySelectorAll(".emoji").forEach(function (emoji) {
        emoji.style.cursor = "pointer";
        emoji.style.fontSize = "1.5rem";

        emoji.addEventListener("click", function () {
            const inicio = msgText.selectionStart;
            const fin = msgText.selectionEnd;

            msgText.value = msgText.value.slice(0, inicio)
                    + emoji.textContent
                    + msgText.value.slice(fin);

            const nuevaPos = inicio + emoji.textContent.length;
            msgText.setSelectionRange(nuevaPos, nuevaPos);
            msgText.focus();
        });
    });
}
//asociar un listener
//cuando pulsas click en el boton se envia el mensaje
    document.getElementById("sendButton").addEventListener('click', enviarMensajes);
//asocio el add event   
//actualizar se asocia con el evento de carga del DOM de la pagina 
document.getElementById("sendButton").addEventListener('click', enviarMensaje);emoticono();

document.getElementById("msgText").addEventListener("keydown",pulsarTecla);



//Creamos la funcion para que reconozca la tecla enter
function pulsarTecla(tecla){
    if (tecla.key === "Enter") {
        tecla.preventDefault();
        enviarMensaje();
    }
}


