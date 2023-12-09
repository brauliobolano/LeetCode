class Node { // Node class to create a new node with a value, left and right property 
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree { // Binary Search Tree class to create a new tree with a root property
  constructor(){
    this.root = null;
  }
  insert(value){ // insert method to insert a new node in the tree
    const newNode = new Node(value);
    if (this.root === null) { // if there is no root, the new node becomes the root
      this.root = newNode; 
    } else {
      let currentNode = this.root; // if there is a root, we start at the root
      while(true){ // we loop until we find the right spot to insert the new node
        if(value < currentNode.value){ 
          //Left
          if(!currentNode.left){ // if there is no left child, the new node becomes the left child 
            currentNode.left = newNode; 
            return this; // we return the tree
          }
          currentNode = currentNode.left; // if there is a left child, we look at the left child
        } else { // if the value is greater than the current node
          //Right
          if(!currentNode.right){ // if there is no right child, the new node becomes the right child
            currentNode.right = newNode; 
            return this; // we return the tree
          } 
          currentNode = currentNode.right; // if there is a right child, we look at the right child
        }
      }
    }
  }
  lookup(value){ // lookup method to search for a node in the tree
    if (!this.root) { // if there is no root, we return false
      return false; 
    }
    let currentNode = this.root; // if there is a root, we start at the root
    while(currentNode){ // we loop until we find the node
      if(value < currentNode.value){ // if the value is less than the current node
        currentNode = currentNode.left; // we look at the left child
      } else if(value > currentNode.value){ // if the value is greater than the current node
        currentNode = currentNode.right; // we look at the right child
      } else if (currentNode.value === value) { // if the value is equal to the current node
        return currentNode; // we return the current node
      }
    }
    return null // if we don't find the node, we return null
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// JSON.stringify(traverse(tree.root))
tree.lookup(15);
tree.lookup(7);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
