class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SList {
  constructor(head = null) {
    this.head = head;
  }

  seed(vals) {
    vals.forEach((val) => this.insertAtBack(val));
  }

  // SList: Display
  // Create display(node) for debugging that returns a string containing all list values.
  display() {

    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.val}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }

  // List: Remove Front
  // Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null .
  removeHead() {

    if (!this.head) return null;

    this.head = this.head.next;
  }

  // SList: Remove Back
  // Create a function that removes the last ListNode in the list.
  removeBack() {

    let runner = this.head;

    while (runner.next) {

      if (runner.next.next === null) {
        runner.next = null;
        return sList;
      }
      runner = runner.next;
    }

    this.head = null;
  }

  // SList: Back
  // Create a function that accepts a ListNode pointer and returns the last value in the list.

  getLastVal() {
    let runner = this.head;
    while (runner.next) runner = runner.next;
    return runner.val;
  }

  // List: Add Front
  // Given a pointer to the first ListNode and a value, create a new node, assign it to the list head
  insertAtFront(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
  }

  // SList: Add Back
  // Create a function that creates a ListNode with given value and inserts it at end of a linked list.
  insertAtBack(val) {

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

  // List: Contains
  // Given a ListNode pointer and a val, return whether val is found in any node in the list.
  contains(val) {

    let runner = this.head;

    while (runner) {
      if (runner.val === val) return true;
      runner = runner.next;
    }
    return false;
  }

  // SList: Length
  // Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList
  length() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }

  // SList: Max
  // Create max(node) to return list’s largest val.
  max() {

    let runner = this.head;
    if (!runner) return null;
    let max = 0;

    while (runner) {
      if (runner.val > max) max = runner.val;
      runner = runner.next;
    }
    return max;
  }

  // SList: Average
  // Create average(node) to return average val.
  average() {

    let runner = this.head;
    let sum = 0;
    let cnt = 0;

    while (runner) {
      cnt++
      sum += runner.val;
      runner = runner.next;
    }

    return Math.round((sum / cnt) * 100) / 100;
  }

  // SList: Move Min to Front
  // Create a function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.
  moveMinToFront() {

    let runner = this.head;
    if (runner === null) return;

    let min = this.head.val;

    while (runner) {
      if (runner.val < min) min = runner.val;
      runner = runner.next;
    }
    // now that we know the min, if it is alredy the head, nothing needs to be done
    if (this.head.val === min) return;

    let prev = this.head;
    runner = this.head.next;

    while (runner) {
      if (runner.val === min) {
        prev.next = runner.next; // remove the min
        this.insertAtFront(min);
        return;
      }
      else {
        prev = runner;
        runner = runner.next;
      }
    }
  }

  // SList: Move Max to Back
  // Create a function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.
  moveMaxToBack() {
    if (this.head === null) return null;
    let max = this.head.val;
    let runner = this.head.next;

    while (runner) {
      if (runner.val > max) {
        max = runner.val;
        if (runner.next === null) return; // max already at end.
      }
      runner = runner.next;
    }


  }

  // SList: Concat
  // Given two pointers to separate linked lists,
  // concatenate the second list to the end of the first one,
  // and return the new list.
  concat(addList) {

    let runner = this.head;

    if (runner === null) this.head = addList.head;
    else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = addList.head;
    }
  }

  // SList: Partition
  // Create partition(ListNode,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. Return the new head ListNode .

  partition(val) {
    // TODO: support provided value having dupes in list with a count of dupes and add that many after loop
    const smallerList = new SList();
    const largerList = new SList();

    let runner = this.head;
    if (runner === null) return null;

    while (runner) {
      // insertAtFront for better perfmance than insertAtBack
      if (runner.val < val)
        smallerList.insertAtFront(runner.val);
      else if (runner.val > val)
        largerList.insertAtFront(runner.val);

      runner = runner.next;
    }
    // ensure our given val is at the beginning of the larger list
    largerList.insertAtFront(val);
    smallerList.concat(largerList);

    this.head = smallerList.head;
  }

  // SList: Prepend Val
  // Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before ). Return the new list.

  // SList: Append Val
  // Create appendVal(list,val,after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list.

  // Create SList (prompt)
  // Create an SList with values entered. Use the prompt function to gather values one at a time from the user, putting each into a ListNode that you add to the end of the list. When the user hits [Cancel] , return the list you have created.

  // SList: Remove Val
  // Create removeVal(ListNode,val) . Given a pointer to the head ListNode , remove the node with the given val. What will you do if val is not found?

  removeVal(val) {

    if (!this.head) return;

    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }

    let runner = this.head.next;

    while (runner.next && runner.next.val !== val) {
      runner = runner.next;
    }

    if (runner.next && runner.next.val === val) {
      runner.next = runner.next.next;
    }
  }

  // SList: Split on Value
  // Create splitOnVal(list,num) that, given number , splits a list in two. The latter half of the list should be returned, starting with node containing num . E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).

  // SList: Remove Negatives
  // Given a pointer to the head node of a singly linked list, remove any nodes containing negative values and return (a pointer to) the new list.

  // SList: Second to Last Value
  // Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?
  secondToLast() {

    if (!this.head || !this.head.next) return null;

    let runner = this.head;

    while (runner.next && runner.next.next) {
      runner = runner.next;
    }
    return runner.val;
  }

  // SList: Delete Given Node
  // Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last ), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next .

  // SList: Copy
  // Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

  // SList: Filter
  // Given a headNode ,a lowVal and a highVal , remove from the list any nodes that have values less than lowVal or higher than highVal . Return the new list.

  // SList: Second Largest Value
  // Given a pointer to the first node in a singly linked list, return the second-largest value contained in the list.

  // Zip SLists
  // Provided two pointers to independent linked lists, ‘zip’ the two lists together by alternating nodes. Start with the first list, and return the new combined list.

  // Dedupe SList
  // Remove nodes with duplicate values. Following this call, all remaining nodes should have unique values. Retain only first instance of each value.

  // Dedupe SList Without Buffer
  // Can you accomplish deduplication without using a secondary buffer? What are the performance ramifications? How long would you expect the function to take to finish, if it was sent an SList of length 5 million?
}

module.exports = { SList, Node };