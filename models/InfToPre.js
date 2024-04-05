
let results;
export class InfToPre{


getData(){
    console.log(results);
    document.getElementById("text").innerHTML+=results+"\n";
}

infijaAprefija(dato) {
   
    let prefija = '';
    let arreglo = [];
    
    for(let i = 0; i < dato.length; i++) {
        let entrada = dato[i];

        if(/[a-zA-Z0-9]/.test(entrada)) {
            prefija += entrada;
        } else if(entrada === '(') {
            arreglo.push(entrada);
        } else if(entrada === ')') {
            while(arreglo.length > 0 && arreglo[arreglo.length-1] !== '(') {
                prefija += arreglo.pop();
            }
            arreglo.pop();
        } else {
            while(arreglo.length > 0 && this.operador(entrada) <= this.operador(arreglo[arreglo.length-1])) {
                prefija += arreglo.pop();
            }
            arreglo.push(entrada);
        }
    }
    
    while(arreglo.length > 0) {
        prefija += arreglo.pop();
    }
    results=prefija;
}
operador(operador) {
    switch(operador) {
        case '+':
        case '-': return 1;
        case '*':
        case '/': return 2;
        case '^': return 3;
        default: return 0;
    }
}

}


