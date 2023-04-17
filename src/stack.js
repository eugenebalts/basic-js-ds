const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = []
  }
  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.array = [...this.array, element]
  }

  pop() {
    let result = this.array[this.array.length - 1]
    this.array.splice(this.array.length -1, 1)
    return result
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.array[this.array.length - 1]
  }
}

module.exports = {
  Stack
};

let newArray = new Stack()

// console.log(newArray)

newArray.push(5)
newArray.push(5)
newArray.push(4)
newArray.push(8)
console.log(newArray)
newArray.pop()
newArray.peek()
console.log(newArray)
console.log(newArray.peek())
