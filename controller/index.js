import { inTopre } from "./dependencies.js";

let boton = document.getElementById("convertir");
boton.addEventListener("click",function(){
    
    let infija = document.getElementById("infija").value;
    let prefija = inTopre.infijaAprefija(infija);
    document.getElementById("prefija").innerText = prefija;
});
