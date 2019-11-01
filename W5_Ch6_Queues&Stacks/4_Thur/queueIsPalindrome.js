/* 
  // http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2115

  Queue: Is Palindrome

  Given a Queue , return true if its values are a palindrome (if they are same in reverse order), else return false . Restore Queue to original state before exiting. For storage, use one additional Stack .

  I.E., if the order of the queue items are the same forwards and backwards

  You CAN use vars to store a deQueued and/or popped item, but NO string concatenating the entire queue, no 2nd stack, queue, or arrays.
  
*/

/* 
  Approach:
  1. loop over fixed-length of queue
    - deQueue each item and push it into the stack
    - enQueue each item back into the queue
  2. loop over fixed-length of queue and check equality of popped & deQueued vals
    - enQueue each deQueued item back into the queue

  - since each deQueued item gets enQueued in order, by end of loop the queue order is the same
*/

const Stack = require('../stack');
const Queue = require('../queue');

function isQueuePalindrome(queue) {

  let isPalin = true;
  const stack = new Stack(),
    len = queue.size();

  for (let i = 0; i < len; i++) {
    let deQueued = queue.deQueue()
    stack.push(deQueued);
    queue.enQueue(deQueued)
  }

  for (let i = 0; i < len; i++) {
    let deQueued = queue.deQueue();
    let popped = stack.pop();

    if (popped !== deQueued) isPalin = false;

    queue.enQueue(deQueued);
  }
  return isPalin;
}

console.log(isQueuePalindrome(new Queue(['d', 'a', 'b', 'd'])));