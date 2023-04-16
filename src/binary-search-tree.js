const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor (value) {
    this.rooot = value
    this.leftFork = null;
    this.rightFork = null;
  }
}

class BinarySearchTree{
  constructor () {
    this.rooot = null
  }

  root() {
    return this.rooot
  }

  add(value) {
    const newValue = new Node(value)

    if (this.rooot === null) {
      this.rooot = newValue
    } else {

      // FUNCTION REC

      function recursive(current) {
        if (value < current.rooot) {             // LEFT FORK
          if (current.leftFork){
            recursive(current.leftFork)
          } else {
            current.leftFork = newValue
          }
        } else  if (current.rooot < value){    // RIGHT FORK
          if (current.rightFork){
            recursive(current.rightFork)
          } else {
            current.rightFork = newValue
          }
        }
      }

      recursive(this.rooot)
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


// tree.add(7)
// tree.add(5)
// tree.add(11)
// tree.add(14)
// tree.add(10)
// tree.add(13)
// tree.add(13.5)


// console.log(tree.rot())
console.log(tree.root())
console.log(tree)
// console.log(tree.add(10))



module.exports = {
  BinarySearchTree
};

