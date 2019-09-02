// Basic Implementation of a Queue in Javascript
//
// Can be done with an Array or a Linked List: Only Linked List
// impl is shown here
//
// NOTE: front/back are reversed in this implementation,
// so removing takes from the 'front' and adding adds to the 'back'
// even though FIFO behavior is maintained 
class LinkedListQueue {

    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    remove() {
        if (this.front == null) {
            throw "Cannot pop() on an empty stack"
        }
        else {
            var data = this.front.data;
            this.front = this.front.next;
            return data;
        }
    }

    push(data) {

        var pushNode = new QueueNode(data);

        if (this.back != null) {
            this.back.next = pushNode;
        }
        this.back = pushNode;

        if (this.front == null) {
            this.front = this.back
        }

        this.size++;
    }

    peek() {
        if (this.front == null) {
            return null;
        }
        return this.back.data;
    }

    isEmpty() {
        return (this.front);
    }
}

class QueueNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

let x = new LinkedListQueue();
x.push(1);
x.push(2);
x.push(3);

let y = x.peek();

console.log(y)
let z = x.remove();
console.log(z);