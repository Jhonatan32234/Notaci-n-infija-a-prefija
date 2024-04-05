import { inTopre } from "./dependencies.js";

let boton= document.getElementById("action");
boton.addEventListener("click",function(){

    let dato = document.getElementById("enter").value;
    inTopre.infijaAprefija(dato);
   
    inTopre.getData();
});
