'use strict';

// const Node = require('../lib/node');
// const linkedList = require('../lib/linkedList');


module.exports = function switchNodes(linkedList) {
  if (linkedList.head == null) {
    return undefined;
  }

  let current = linkedList.head;
  const previous = linkedList.head;
  let runner = linkedList.head.next;

  while (runner !== null && runner !== current) {
    current.next = runner.next;
    runner.next = current;
    linkedList.head = runner;
    current = current.next;
    runner = runner.next.next;
    console.log(runner);
    previous.next = runner;
  }
  return linkedList;
};


//
//   let current = linkedList.head;
//   let runner = linkedList.head.next;
//   let previous = null;
//   const helper = linkedList.head;
//
//   while (runner !== null && runner !== current) {
//     current.next = runner.next;
//     runner.next = current;
//     if (previous == null) {
//       previous = runner;
//       linkedList.head = previous;
//       previous = previous.next;
//       // helper.next = previous;
//     } else {
//       helper.next = previous;
//       previous.next = runner;
//       previous = previous.next.next;
//     }
//     current = current.next;
//     if (current == null) break;
//     runner = runner.next.next;
//   }
//   return linkedList;
// };
