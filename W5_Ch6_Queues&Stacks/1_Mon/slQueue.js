// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115
// SLQueue: Enqueue

/* 
  A queue is a data structure used to represent a FIFO pattern
  It is often implemented with an array, but can also be implemented with a linked list

  Think of waiting in line, the first in line is the first to be serviced.
  When someone else gets in line, they go to the back of the line.

  1. Create SLQueue class that will be an implementation of a queue using a singly linked list
  2. Add the enQueue method, which adds to the back of the queue
    - SLQueue.prototype.enQueue = function ...
*/

const Node = require("../node")

class SLQueue {
  constructor(head = null) {
    this.head = head;
  }

  enQueue(val) { // add to back
    const newBack = new Node(val);
    let runner = this.head;

    if (runner === null) this.head = newBack;
    else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = newBack;
    }
  }

  deQueue() { // remove head
    if (!this.head) return null;

    const deQueued = this.head;
    this.head = this.head.next;
    return deQueued.val;
  }

  front() {
    return this.head;
  }

  isEmpty() {
    return this.head === null;
  }

  contains(val) {

    let runner = this.head;

    while (runner) {
      if (runner.val === val) return true;
      runner = runner.next;
    }
    return false;
  }

  isEqualTo(compareList) {
    const len1 = this.size();
    const len2 = compareList.size();
    let isEqual = true;

    if (len1 !== len2) return false;

    // can't early exit because we need to finish enQueueing so queues not changed
    for (let i = 0; i < len1; i++) {
      const deq1 = this.deQueue();
      this.enQueue(deq1);

      const deq2 = compareList.deQueue();
      compareList.enQueue(deq2);

      if (deq1 !== deq2)
        isEqual = false;
    }
    return isEqual;
  }

  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.val}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }

  seed(vals) {
    vals.forEach((val) => this.enQueue(val));
  }
}