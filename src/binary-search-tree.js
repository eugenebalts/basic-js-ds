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

      function add(current) {
        if (value < current.rooot) {             // LEFT FORK
          if (current.leftFork){
            add(current.leftFork)
          } else {
            current.leftFork = newValue
          }
        } else  if (current.rooot < value){    // RIGHT FORK
          if (current.rightFork){
            add(current.rightFork)
          } else {
            current.rightFork = newValue
          }
        }
      }

      add(this.rooot)
    }
    
  }

  has(value) {

    let result;

    function has(current) {
      if (value === current.rooot) {
        result = true
      } else {
        if (value < current.rooot) {             // LEFT FORK
          if (current.leftFork){
            has(current.leftFork)
          } else {
            result = false
          }
        } else  if (value > current.rooot){    // RIGHT FORK
          if (current.rightFork) {
            has(current.rightFork)
          } else {
            result = false
          }
        }
      }
    }

    has(this.rooot)
    return result
  }

  find(value) {
    let result;
    function find(current) {
  
      if (value === current.rooot) {
        result = current
      } else if (value < current.rooot) {
        if (current.leftFork) {
          find(current.leftFork)
        } else {
          result = current.leftFork
        }
      } else if (value > current.rooot) {
        if (current.rightFork) {
          find(current.rightFork)
        } else {
          result = current.rightFork
        }
      }
    }
    find(this.rooot)
    return result
    // let i = 0;
    // function find(current) {
    //   i += 1
    //   console.log(i)
    //   if (current.rooot === value) {
    //     result = current
    //   }
    //   if (value < current.rooot) {
    //     if (current.leftFork) {
    //       find(current.leftFork)
    //     } else result = null
    //   } else if (value > current.root) {
    //     if (rightFork) {
    //       find(current.rightFork)
    //     } else result = null
    //   }  
    //   i += 1
    //   console.log(i)
    // }
    // find(this.rooot)
    // return result;
  }

  remove(value) {
    const removed = new Node(null)
    function remove(current, parent) {
      if (value === current.rooot) {
        current.rooot = null;
        current.leftFork = null
        current.rightFork = null
      } else if (value < current.rooot) {
        if (current.leftFork) {
          remove(current.leftFork)
        }
      } else if (value > current.rooot) {
        if (current.rightFork) {
          remove(current.rightFork)
        }
      } else if (!(value < current.rooot && value > current.rooot)) {
        return false
      }
    }
    remove(this.rooot)
  }

  min() {
    let result;
    function min(current) {
      if (current.leftFork) {
        min(current.leftFork)
      } else if (current.rooot) {
        result = current.rooot
      } else result = null
    }
    min(this.rooot)
    return result
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}



let tree = new BinarySearchTree()


tree.add(7)
tree.add(5)
tree.add(11)
tree.add(14)
tree.add(10)
tree.add(13)
tree.add(13.5)
tree.add(6)
tree.add(3)




console.log(tree)
console.log(tree.min())




module.exports = {
  BinarySearchTree
};

