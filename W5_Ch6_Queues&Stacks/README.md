# Overview
- give extra exam prep algo mid week: extras/exam_prep/py/filterCompletedTasks.js

A stack and a queue are two data structures that are just an
array or linked list contained within a class. The purpose
of wrapping a class around it, is to enforce a standardized
way of interacting with the array via the classes methods.
This standardized way of interacting with the array is what
makes it either a stack or a queue.

Rather than mutating the array directly, or even looping over it,
all of that should be done by methods in the class to keep the way
the data structure is interacted with consistent.

# Stack (Last In First Out (LIFO))
Imagine a stack of heavy blocks. You would only add new blocks
to the top of the stack and remove blocks from the top of the stack.
to remove the block at the bottom of the stack, you would first remove
blocks at the top one-by-one until you got to the bottom

- new items are added to the 'top' of the 'stack'
  - added to the back of the array
- items are only removed from the 'top' of the 'stack'
  - removed from the back of the array

# Queue (First in First Out (FIFO))
Imagine a line of people at a grocery store.
The first person in line is the next person to be serviced.
You wouldn't service the last person in line first.

- new items are added to the back of the queue (end of array)
- items are only removed from the front of the queue (front of array)