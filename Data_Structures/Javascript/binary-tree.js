// Class for creating new node instances to add to the tree
const empty = 'Tree is Empty!';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree Data Structure
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Checks if my Tree is Empty
    isEmpty() {
        return this.root === null;
    }

    // Inserts new node in tree data structure
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    // Inserts Node in left or right half of the tree based on Node value.
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if(root.left === null) root.left = newNode;
            else this.insertNode(root.left, newNode);
        }
        else {
            if(root.right === null) root.right = newNode;
            else this.insertNode(root.right, newNode);
        }
    }

    // Searches left or right half of my tree to find if the 'value' exists
    search(root, value) {
        if(this.isEmpty()) return empty;
        else if(root === null) return false;
        else if(root.value == value) return true;
        else if(value < root.value) return this.search(root.left, value);
        else return this.search(root.right, value);
    }

    /*
    Prints all nodes in the tree starting with the root node/Parent, then all of the left half in the order: Parent Node, Left Child, Right Child. Lastly, does the same thing that was done to the left half to the right half in the same order.
    */
    preOrder(root) {
        if(this.isEmpty()) return empty;
        if(root === null) return;

        // Print parent Node
        console.log(root.value);

        // Visit left Node
        this.preOrder(root.left);

        // Visit right Node
        this.preOrder(root.right);
    }
    
    /*
    Visits nodes in the order: Left child, Parent, then Right Child all the way up the left half first. Next, prints the root node/Parent. Lastly, does the same thing that was done to the left side to the right side.
    */
    inOrder(root) {
        if(this.isEmpty()) return empty;
        if(root === null) return;
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
    
    /*
    Visits nodes in the order: Left child, Right Child, then Parent all the way up the left half first. Next, does the same thing that was done to the left half of the tree to the right half of the tree. Lastly, prints the root node/Parent.
    */
    postOrder(root) {
        if(this.isEmpty()) return empty;
        if(root === null) return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
    
}



const b = new BinarySearchTree();
b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
// b.insert(16);
// b.insert(12);
// b.insert(17);
// b.insert(35);
// b.insert(133);
// b.insert(63);

b.postOrder(b.root);