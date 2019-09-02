//  Basic implementation of a Stack in JavaScript
//
// This can be done with an Array, or with a Linked List

// Linked List Impl
class LinkedListStack {

    constructor() {
        this.top = null;
        this.size = 0;
    }

    pop() {
        if (this.top == null) {
            throw "Cannot pop() on an empty stack"
        }
        else {
            var topData = this.top.data;
            this.top = this.top.next;
            return topData;
        }
    }

    push(data) {
        var pushNode = new StackNode(data);
        pushNode.next = this.top;
        this.top = pushNode;
        this.size++;
    }

    peek() {
        if (this.top == null) {
            return null;
        }
        return this.top.data;
    }

    isEmpty() {
        return (this.top);
    }
}

class StackNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

let myStack = new LinkedListStack();
myStack.push(7);
myStack.push(8);
myStack.push(2);
var x = myStack.peek();
console.log(x)

// ************************************************************************************

// Array Impl
// NOTE THAT MANY OF THE METHODS ARE BUILT IN FOR ARRAYS IN JS
class StackArray {

    constructor() {
        this.items = [];
        this.size = 0;
    }

    pop() {
        if (this.isEmpty()) {
            throw "Cannot pop an empty stack";
        }
        this.items.pop();
        this.size--;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.size - 1];
    }

    push(data) {
        this.items.push(data);
        this.size++;
    }

    isEmpty() {
        return (this.size == 0);
    }
}

let x = new StackArray();
x.push(1);
x.push(2);
x.push(3);

let y = x.peek();
console.log(y);
x.pop();
let z = x.peek();
console.log(z);
x.push(88);
x.pop();
x.pop();
x.pop();
let final = x.peek();
console.log('X : ' + final);