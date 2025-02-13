import { Node } from "/node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (!current) break;
    }

    return current ? current.value : null;
  }

  pop() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }

      if (!current) return;

      current.next = null;
    }
    this.size--;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    return null;
  }

  toString() {
    if (!this.head) return null;
    let current = this.head;

    let list = "";

    while (current) {
      list += `( ${current.value} ) -> `;
      current = current.next;
    }
    return list + "null";
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
        currentIndex++;
      }
    }
  }

  removeAt(index) {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index - 1) {
        current.next = current.next.next;
        return;
      } else {
        current = current.next;
        currentIndex++;
      }
    }
  }
}
