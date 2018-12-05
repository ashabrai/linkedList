
'use strict';

const switchNodes = require('../src/solution');

const Node = require('../lib/node');
const LinkedList = require('../lib/linkedList');

// const linkedList = new LinkedList();
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
//
// console.log('HERE I AM', linkedList);
//
// linkedList.head = one;
// linkedList.head.next = two;
// linkedList.head.next.next = three;
// linkedList.head.next.next = four;

describe('Testing solution', () => {
  test('Testing to see if it switches node', () => {
    const linkedList = new LinkedList();
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);

    // console.log('HERE I AM', linkedList);

    linkedList.head = one;
    linkedList.head.next = two;
    linkedList.head.next.next = three;
    linkedList.head.next.next.next = four;

    const switchNode = switchNodes(linkedList);
    expect(switchNode.head).toEqual(two);
    expect(switchNode.head.next).toEqual(one);
    expect(switchNode.head.next.next).toEqual(four);
    expect(switchNode.head.next.next.next).toEqual(three);
  });
});
