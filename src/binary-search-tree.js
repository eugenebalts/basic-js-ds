const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor (value) {
    this.root = value
    this.leftFork = null;
    this.rightFork = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
    this.leftFork = null
    this.rightFork = null
  }

  root() {
    const newValue = newNode(value)
    this.root = newValue
    return this
  }

  add(value) {
    const newValue = new Node(value)

    if (this.root === null) {
      this.root = value
    } else {


        if (value < this.root) {             // LEFT FORK
          this.leftFork = newValue
        } else {
          this.rightFork = newValue      // RIGHT FORK
        }

        let current = this.root

        while (current.leftFork === null || current.rightFork === null) {

        }






    }



  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}



let tree = new BinarySearchTree()

tree.add(7)
tree.add(8)
tree.add(6)
tree.add(9)

console.log(tree.root)

console.log(tree)



// module.exports = {
//   BinarySearchTree
// };