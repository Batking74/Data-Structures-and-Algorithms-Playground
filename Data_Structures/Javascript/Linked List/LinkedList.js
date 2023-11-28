class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    insertAtHead(data) {
        // Creating a new node at the beginning of the list with a value (data), and a pointer to the old/original node/head and pushing it over an index so the old/orignal node is now the 'nextNode'
        const newNode = new LinkedListNode(data, this.head);
        // Setting the new head (index 0) to the new node
        this.head = newNode;
        // Incrimenting the length of the list because I added to it.
        this.length++;
    }

    // reverse() {

    // }
    
    getIndex(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        for(let i = 0; i < index; i++) current = current.nextNode;
        return current;
    }
    
    insertAtIndex(index, value) {
        if(index === 0) return this.insertAtHead(value);
        let prev = this.getByIndex(index - 1);
        if(prev == null) return null;
        prev.nextNode = new LinkedListNode(value, prev.nextNode);
        this.length++;
    }
    
    removeHead() {
        this.head = this.head.nextNode;
        this.length--;
    }
    
    removeIndex(index) {
        if(index === 0) return this.removeHead();
        let prev = this.getByIndex(index - 1);
        if(prev == null) return null;
        prev.nextNode = prev.nextNode.nextNode;
        this.length--;
    }
    
    print() {
        let output = '';
        let current = this.head;
        while(current) {
            output = `${output} ${current.value},`
            current = current.nextNode;
        }
        console.log(`[${output} ${current}]`);
    }
}

class LinkedListNode {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;
// The head is the pointer/Referencer
// This length is to keep tract of the nodes in the linked list
// Head is the beggining of the list
// With linkedList you have to consistently loop through every single node to get to the particular index you want so this is the reason why linked list are slower at getting indexes
// This class is for each of the nodes I create