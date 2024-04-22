import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
      this.head = null;
  }

  add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  display() {
      let current = this.head;
      let result = "";
      while (current !== null) {
          result += current.data;
          current = current.next;
      }
      return result;
  }
}
