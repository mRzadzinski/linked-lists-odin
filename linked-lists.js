class LinkedList {
    constructor() {
        this.head = null;
    } 

    // Adds a new node containing value to the end of the list
    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            let tempHead = this.head;
            while (tempHead.nextNode != null) {
                tempHead = tempHead.nextNode;
            }
            tempHead.nextNode = new Node(value);
        }
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            let newNode = new Node(value, this.head);
            this.head = newNode;
        }
    }

    // Returns the total number of nodes in the list
    size() {
        let counter = 0
        let tempHead = this.head;
        while (tempHead != null) {
            counter += 1;
            tempHead = tempHead.nextNode;
        }
        return counter;
    }

    // Returns the first node in the list
    headNode() {
        return this.head;
    }

    // Returns the last node in the list
    tailNode() {
        let tempHead = this.head;
        while (tempHead.nextNode != null) {
            tempHead = tempHead.nextNode;
        }
        return tempHead;
    }

    // Returns the node at the given index
    atIndex(index) {
        let tempHead = this.head;
        for (let i = 1; i < index; i++) {
            tempHead = tempHead.nextNode;
        }
        return tempHead;
    }

    // Removes the last element from the list
    pop() {
        // If the list is empty
        if (this.head === null) return;

        let prev = this.head;
        let curr = this.head.nextNode;

        // For one element
        if (curr === null) {
            this.head = null;
            return;
        }

        // For more elements
        while (curr.nextNode != null) {
            prev = prev.nextNode;
            curr = curr.nextNode;
        }
        prev.nextNode = null;
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        if (this.head === null) return false;

        let tempHead = this.head;
        do {
            if (tempHead.value === value) return true;
            tempHead = tempHead.nextNode;
        } while (tempHead != null);

        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        if (this.head === null) return null;

        let counter = 1;
        let tempHead = this.head;
        do {
            if (tempHead.value === value) return counter;
            tempHead = tempHead.nextNode;
            counter += 1;
        } while (tempHead.value != null);

        return null;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();
let node = new Node();
list.append(1);
list.append(2);
list.append(3);
list.prepend(55)


console.log(list);
console.log(list.find(4));