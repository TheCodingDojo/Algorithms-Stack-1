// https://leetcode.com/problems/min-stack/
/* 
  Design a stack that supports push, pop, top, 
  and retrieving the minimum element
    - bonus: retrieve min element in constant time.

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack (without looping).
*/

class MinStack {
  constructor() {
    this.items = [];
    this.minStack = [];
  }

  push(n) {
    this.items.push(n);

    if (this.minStack.length === 0 || n < minStack[this.minStack.length - 1])
      this.minStack.push(item);
  }

  pop() {
    const popped = this.items.pop();

    if (popped === this.minStack[this.minStack.length - 1])
      this.minStack.pop();

    return popped;
  }

  top() {
    return this.items[this.items.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// store objects in stack with a curr min key to track what the min was at that time