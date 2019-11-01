// https://www.geeksforgeeks.org/implementation-stack-javascript/
// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115
// ArrStack: Push

class Stack {
  constructor(items = []) {
    this.items = items;
  }

  push(el) {
    this.items.push(el);
  }

  pop() {
    if (this.isEmpty())
      return 'Underflow';

    return this.items.pop();
  }

  peek() { // aka top
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str; 
  }
}

module.exports = Stack;