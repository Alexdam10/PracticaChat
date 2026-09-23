/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
class mensaje{
   /*atributo de texto @type String*/
    texto="";
    /*atributo tipo tiempo*/
   fechaHora;
  
    constructor(texto = "") {
    this.texto = texto;
    this.fechaHora = new Date(); // Asigna la fecha y hora actual al crearse
  }
 obtenerHoraFormateada() {
    return this.fechaHora.toLocaleTimeString(
            [], {hour: "2-digit",minute: "2-digit"});
  }
}

