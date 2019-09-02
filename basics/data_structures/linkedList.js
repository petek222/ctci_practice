// Basic implementation of a Linked List in JavaScript
class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {

        var cur = this.head;

        if (this.head == null) {
            this.head = new Node(data);
            this.size++;
        }

        else {

            while(cur.next != null) {
                cur = cur.next;
            }

            cur.next = new Node(data);

            this.size++;
        }
    }

    print() {

        var cur = this.head;

        // This is necessary to 'specify' the type
        // Otherwise you'll get NaN
        let listString = "";

        while (cur != null) {
            listString = listString + cur.data;
            cur = cur.next;
        }
        console.log(listString);

    }

    // Add more functions to this as desired
}

class Node {

    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

// let me = new LinkedList();

// me.append(7);
// me.append(2);
// me.append(8);

// me.print();


// Export like this for Defaults
module.exports = LinkedList;