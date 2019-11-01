// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115
// Create Queue Using Two Stacks

// Starter code / explanation

// Create Queue Using Two Stacks
/* 
  class TwoStackQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  }

  TwoStackQueue.prototype.enQueue = // function
  TwoStackQueue.prototype.deQueue = // function

  Using ONLY two stacks as the underlying data structure, simulate a queue (FIFO).
  Since you are using stacks, you have to use .pop() and .push() to add / remove elements from them.
  i.e., you have to use the stacks in the way that stacks are meant to be used
*/

class TwoStackQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  // costly, especially when enQueue is called multiple times. Can be improved by leaving items in stack2 in case enQueue is called again
  enQueue(item) {
    // move all items from stack1 to stack2, which reverses order
    this.alternateStacks(this.stack1, this.stack2)

    // new item will be at the bottom of stack1 so it will be the last out / last in line
    this.stack1.push(item);

    // move items back to stack1, from stack2
    this.alternateStacks(this.stack2, this.stack1)
  }

  deQueue() {
    if (this.stack1.length) return this.stack1.pop();
    else console.log("Queue is empty.");
  }

  alternateStacks(start, destination) {
    while (start.length) {
      destination.push(start.pop());
    }
  }
}