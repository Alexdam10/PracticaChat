/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
class chatcontroller {
    constructor() {
        this.lista = [];
    }

    recogerTexto() {
        alert("El botón esta funcionado");
        const cogertext = document.getElementById("cuadroEscritura");
        const texto = cogertext.value; // cogemos el valor del campo
        const mimensaje = new mensaje(texto);
            // Guardamos el objeto en la lista del controlador
            this.lista.push(mimensaje);

            // Llamamos a mostrarTexto pasándole la lista actualizada
            this.mostrarTexto(this.lista);
            
            //Limpiamos el teclado 
            cogertext.value="";

       
    }
    

    mostrarTexto(lista) {
        const mostrartext = document.getElementById("miCuadro");
      

        // Limpiamos el contenido previo del cuadro para evitar duplicar mensajes
        mostrartext.innerHTML = "";

        // Recorremos la lista de mensajes pasada por parámetro
        for (const msg of lista) {
            console.log(msg.texto);
            const parrafo = document.createElement("p");
            parrafo.textContent = msg.texto; // Asignamos el texto al atributo del párrafo
            mostrartext.appendChild(parrafo); // Lo añadimos como hijo dentro del contenedor miCuadro
        }
    }
}

chatcontroller = new chatcontroller();

