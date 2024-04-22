
import { LinkedList } from "./LinkedList.js";

export class InfToPre{
   

  infijaAprefija(infija) {
    let precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    let operador = new LinkedList();
    let operandos = new LinkedList();

    for (let i = infija.length - 1; i >= 0; i--) {
        let char = infija[i];
        if (char === ')' || char === '(') continue;
        else if (char in precedence) {
            while (operador.head !== null && precedence[operador.head.data] >= precedence[char]) {
                let op = operador.head.data;
                operador.head = operador.head.next;

                let operand1 = operandos.head.data;
                operandos.head = operandos.head.next;

                let operand2 = operandos.head.data;
                operandos.head = operandos.head.next;

                operandos.add(op + operand2 + operand1);
            }

            operador.add(char);
        } else {
          operandos.add(char);
        }
    }

    while (operador.head !== null) {
        const op = operador.head.data;
        operador.head = operador.head.next;

        const operand1 = operandos.head.data;
        operandos.head = operandos.head.next;

        const operand2 = operandos.head.data;
        operandos.head = operandos.head.next;

        operandos.add(op + operand2 + operand1);
    }

    return operandos.display();
}

}



