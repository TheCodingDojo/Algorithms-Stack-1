// https://www.geeksforgeeks.org/implementation-queue-javascript/
class Queue {
  constructor(items = []) {
    this.items = items;
  }

  enQueue(item) {
    this.items.push(item);
  }

  deQueue() {

    if (this.isEmpty())
      return 'Underflow';
    
    return this.items.shift();
  }

  front() {
    if (this.isEmpty())
      return "Queue empty";
    
    return this.items[0];
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

module.exports = Queue;