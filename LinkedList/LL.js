class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = {
      data: data,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }
  printLinkedList() {
    let printArrayList = [];

    let current = this.head;

    while (current !== null) {
      printArrayList.push(current.data);
      current = current.next;
    }
    return printArrayList.join("->");
  }
}

const n1 = new LinkedList(100);
console.log(n1.printLinkedList());
console.log(n1);
