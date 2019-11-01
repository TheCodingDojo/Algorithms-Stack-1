// https://www.geeksforgeeks.org/implementation-stack-javascript/
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115
// SLStack: Pop

/* 
  Starter Code:

  // SLStack
  class SLStack {
    constructor(head = null) {
      this.head = head;
    }

    push(value) {
      // push value to top of stack
    }

    pop() {
      // remove top of stack
    }

    peek() {
      // return top value
    }

    contains(value) {
      // return true if SLStack contains value
      // return false if SLStack does not contain value
    }

    isEmpty() {
      // return true if SLStack is empty
      // return false if SLStack is not empty
    }

    size() {
      // return length of SLStack
    }

    print() {
      // print out the values of the SLStack
    }
  }
*/

class SLStack {
  constructor(head = null) {
    this.head = head;
  }

  push(val) {
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

  pop() { // remove back
    let runner = this.head;

    while (runner.next) {

      if (runner.next.next === null) {
        runner.next = null;
        return;
      }
      runner = runner.next;
    }

    // if above return never runs
    // head is already null or head is only val
    this.head = null;
  }

  peek() { // aka top
    let runner = this.head;
    while (runner.next) runner = runner.next;
    return runner.val;
  }

  contains(val) {

    let runner = this.head;

    while (runner) {
      if (runner.val === val) return true;
      runner = runner.next;
    }
    return false;
  }

  isEmpty() {
    return this.head === null;
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
}