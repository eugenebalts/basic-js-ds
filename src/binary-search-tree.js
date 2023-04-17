const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor (data) {
    this.rooot = data;
    this.leftFork = null;
    this.rightFork = null;
  }
}

class BinarySearchTree{
  constructor () {
    this.rooot = null
  }

  root() {
    if (this.rooot) {
      return {
        data: this.rooot.rooot
      }
    } else {
      return null
    }
  }

  add(data) {
    const newValue = new Node(data)

    if (this.rooot === null) {
      this.rooot = newValue
    } else {

      // FUNCTION REC

      function add(current) {
        if (data < current.rooot) {             // LEFT FORK
          if (current.leftFork){
            add(current.leftFork)
          } else {
            current.leftFork = newValue
          }
        } else  if (current.rooot < data){    // RIGHT FORK
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

  has(data) {

    let result;

    function has(current) {
      if (data === current.rooot) {
        result = true
      } else {
        if (data < current.rooot) {             // LEFT FORK
          if (current.leftFork){
            has(current.leftFork)
          } else {
            result = false
          }
        } else  if (data > current.rooot){    // RIGHT FORK
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

  find(data) {
    let result;
    function find(current) {
  
      if (data === current.rooot) {
        result = current
      } else if (data < current.rooot) {
        if (current.leftFork) {
          find(current.leftFork)
        } else {
          result = current.leftFork
        }
      } else if (data > current.rooot) {
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

  remove(data) {
    const removed = new Node(null)
    function remove(current, parent) {
      if (data === current.rooot) {
        current.rooot = null;
        current.leftFork = null
        current.rightFork = null
      } else if (value < current.rooot) {
        if (current.leftFork) {
          remove(current.leftFork)
        }
      } else if (data > current.rooot) {
        if (current.rightFork) {
          remove(current.rightFork)
        }
      } else if (!(data < current.rooot && data > current.rooot)) {
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
    let result;
    function max(current) {
      if (current.rightFork) {
        max(current.rightFork)
      } else if (current.rooot) {
        result = current.rooot
      } else result = null
    }
    max(this.rooot)
    return result
  }
}



let tree = new BinarySearchTree()


tree.add(2);
tree.add(3);
tree.add(4);

console.log(tree)
// console.log(tree.max())
console.log(tree.root().data)




module.exports = {
  BinarySearchTree
};

