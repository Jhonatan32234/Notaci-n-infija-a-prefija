
import { LinkedList } from "./LinkedList.js";

export class InfToPre{
   

 infixToPrefix(infix) {
    let precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    let operators = new LinkedList();
    let operands = new LinkedList();

    for (let i = infix.length - 1; i >= 0; i--) {
        let char = infix[i];
        if (char === ')' || char === '(') continue;
        else if (char in precedence) {
            while (operators.head !== null && precedence[operators.head.data] >= precedence[char]) {
                let op = operators.head.data;
                operators.head = operators.head.next;

                let operand1 = operands.head.data;
                operands.head = operands.head.next;

                let operand2 = operands.head.data;
                operands.head = operands.head.next;

                operands.add(op + operand2 + operand1);
            }

            operators.add(char);
        } else {
            operands.add(char);
        }
    }

    while (operators.head !== null) {
        const op = operators.head.data;
        operators.head = operators.head.next;

        const operand1 = operands.head.data;
        operands.head = operands.head.next;

        const operand2 = operands.head.data;
        operands.head = operands.head.next;

        operands.add(op + operand2 + operand1);
    }

    return operands.display();
}

}


