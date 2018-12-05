'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big 0: 0 (1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big-0: 0(n)=0(1)
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }


  deleteItem(offset) {
    let counter = (offset - 1);
    let currentNode = this.head;

    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    function recursiveRemove() {
      if (!currentNode.next.next) {
        return undefined;
      }
      if (counter === 0) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      counter -= 1;
      currentNode = currentNode.next;
      recursiveRemove();
      return undefined;
    }

    recursiveRemove();
    return undefined;
  }
};
