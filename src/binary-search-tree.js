const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor (data) {
    this.data = data;
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

  add(data) {
    const newValue = new Node(data)

    if (this.rooot === null) {
      this.rooot = newValue
    } else {

      // FUNCTION REC

      function add(current) {
        if (data < current.data) {             // LEFT FORK
          if (current.leftFork){
            add(current.leftFork)
          } else {
            current.leftFork = newValue
          }
        } else  if (current.data < data){    // RIGHT FORK
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
      if (data === current.data) {
        result = true
      } else {
        if (data < current.data) {             // LEFT FORK
          if (current.leftFork){
            has(current.leftFork)
          } else {
            result = false
          }
        } else  if (data > current.data){    // RIGHT FORK
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
    let result = {};
    function find(current) {
      if (data === current.data) {
        result = current
      } else if (data < current.data) {
        if (current.leftFork) {
          find(current.leftFork)
        } else {
          result = current.leftFork
        }
      } else if (data > current.data) {
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
      if (!current.data) {
        return null
      } else if (current.data === data) {
        return (current)
      } else if (data < current.data) {
        if (current.leftFork) {
          remove(current.leftFork)
        }
      } else if (data > current.data) {
        if (current.rightFork) {
          remove(current.rightFork)
        }
      } else if (!(data < current.data && data > current.data)) {
        return false
      }
    }
    remove(this.rooot, null)

  }

  min() {
    let result;
    function min(current) {
      if (current.leftFork) {
        min(current.leftFork)
      } else if (current.data) {
        result = current.data
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
      } else if (current.data) {
        result = current.data
      } else result = null
    }
    max(this.rooot)
    return result
  }

}



let tree = new BinarySearchTree()

tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);

console.log(tree)
// console.log(tree.min(), 1);

// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// // tree.remove(14);
// // tree.remove(8);
// // tree.remove(9);

// console.log(tree.has(14));
// console.log(tree.has(8));
// console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(6));
// console.log(tree.has(128));
// console.log(tree.has(31));
// console.log(tree.has(54));
// console.log(tree.has(1));



// console.log(tree)




module.exports = {
  BinarySearchTree
};

