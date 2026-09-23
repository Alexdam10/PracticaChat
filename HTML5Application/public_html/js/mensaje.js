/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



class mensaje{
        //Ponemmos el _ para que los atributos de la clase sean privados 
         _texto="";
        _fecha;
        
        constructor(texto,fecha){
            this._texto=texto;
            this._fecha=fecha;
        }
        
        get texto(){
            return this._texto;
        }
        
        get fecha(){
            //Tenemos que formatear el formato de la fecha para poder mostar por pantalla,
            //Porque si no sale un número muy raro
            return new Date (this._fecha).toLocaleDateString();
        }
}

