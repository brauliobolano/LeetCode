// doubly linked list
class Node {
    constructor(data, next = null, prev = null) {
        this.data = data; // Store the data in the node
        this.next = next; // Reference to the next node in the list
        this.prev = prev; // Reference to the previous node in the list
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Reference to the first node in the list
        this.tail = null; // Reference to the last node in the list
    }

    append(data) {
        const newNode = new Node(data); // Create a new node with the given data
        if (!this.head) {
            // If the list is empty, set the new node as both the head and tail
            this.head = this.tail = newNode;
        } else {
            // If the list is not empty, add the new node after the tail
            newNode.prev = this.tail; // Set the previous reference of the new node to the current tail
            this.tail.next = newNode; // Set the next reference of the current tail to the new node
            this.tail = newNode; // Update the tail to be the new node
        }
    }

    prepend(data) {
        const newNode = new Node(data, this.head); // Create a new node with the given data and the current head as the next node
        if (this.head) {
            // If the list is not empty, set the previous reference of the current head to the new node
            this.head.prev = newNode;
        }
        this.head = newNode; // Update the head to be the new node
        if (!this.tail) {
            // If the list was empty, set the new node as both the head and tail
            this.tail = newNode;
        }
    }

    delete(data) {
        if (!this.head) {
            // If the list is empty, return
            return;
        }

        let current = this.head; // Start from the head of the list
        while (current) {
            if (current.data === data) {
                // If the current node contains the data to be deleted
                if (current === this.head && current === this.tail) {
                    // If the current node is the only node in the list
                    this.head = this.tail = null; // Set both the head and tail to null
                } else if (current === this.head) {
                    // If the current node is the head of the list
                    this.head = this.head.next; // Update the head to be the next node
                    this.head.prev = null; // Set the previous reference of the new head to null
                } else if (current === this.tail) {
                    // If the current node is the tail of the list
                    this.tail = this.tail.prev; // Update the tail to be the previous node
                    this.tail.next = null; // Set the next reference of the new tail to null
                } else {
                    // If the current node is in the middle of the list
                    current.prev.next = current.next; // Set the next reference of the previous node to the next node
                    current.next.prev = current.prev; // Set the previous reference of the next node to the previous node
                }

                // Break out of the loop after deletion
                return;
            }
            current = current.next; // Move to the next node
        }
    }

    reverse() {
        let temp = null; // Temporary variable to store the previous node
        let current = this.head; // Start from the head of the list

        while (current !== null) {
            temp = current.prev; // Store the previous node
            current.prev = current.next; // Swap the previous and next references of the current node
            current.next = temp;
            current = current.prev; // Move to the previous node
        }

        if (temp !== null) {
            // If the list was not empty
            this.head = temp.prev; // Update the head to be the previous node of the last node
        }
    }

    printList() {
        let current = this.head; // Start from the head of the list
        const elements = [];

        while (current) {
            elements.push(current.data); // Add the data of the current node to the elements array
            current = current.next; // Move to the next node
        }

        return elements; // Return the elements array
    }

    insert(data, index) {
        if (index === 0) {
            // If the index is 0, prepend the data to the list
            this.prepend(data);
            return;
        }

        const newNode = new Node(data); // Create a new node with the given data
        let current = this.head; // Start from the head of the list
        let i = 0;

        while (current !== null) {
            if (i === index - 1) {
                // If the current node is the node before the desired index
                newNode.next = current.next; // Set the next reference of the new node to the next node
                if (current.next) {
                    // If the next node exists
                    current.next.prev = newNode; // Set the previous reference of the next node to the new node
                }
                current.next = newNode; // Set the next reference of the current node to the new node
                newNode.prev = current; // Set the previous reference of the new node to the current node

                if (newNode.next === null) {
                    // If the new node is the last node in the list
                    this.tail = newNode; // Update the tail to be the new node
                }

                return;
            }

            i++;
            current = current.next; // Move to the next node
        }

        throw new Error('Index out of bounds'); // Throw an error if the index is out of bounds
    }
}
