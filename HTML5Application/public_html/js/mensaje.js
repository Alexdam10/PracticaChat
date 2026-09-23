/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



class mensaje{
        
        texto="";
        fecha;
        
        constructor(texto, fecha){
            this.texto=texto;
            this.fecha=new Date();
        }
        
        get texto(){
            return this.texto;
        }
        
        get fecha(){
            return this.fecha;
        }
}

