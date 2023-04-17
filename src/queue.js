const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value) {
    this.root = null
  }

  getUnderlyingList() {
    return this.root
  }

  enqueue(value) {
    const node = new ListNode(value)
    if (!this.root) {
      this.root = node;
    } else {
      function enqueue(current) {
        if (current.next) {
          enqueue(current.next) 
        } else {
          current.next = node;
        }
      }
      enqueue(this.root)
    }
    return this
  }

  dequeue() {
  //   if (this.root) {

  //     let first = this.root;
      
  //     function dequeue(root) {
  //       root.value = root.next.value
  //       root.next = root.next.next
  //     }
  //     dequeue(this.root)

  //   }
  //   return this.root.value
  const first = this.root.value;
  this.root = this.root.next;
  return first;
  }
}

module.exports = {
  Queue
};

let list = new Queue();
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
console.log(list)
list.dequeue()
console.log(list)
// console.log(list.getUnderlyingList())
