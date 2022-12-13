class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const nodeToPush = new Node(value);
        if (!this.length) {
            this.top = nodeToPush;
            this.bottom = nodeToPush;
            this.length++;
            return;
        }
        const currentTop = this.top;
        this.top = nodeToPush;
        nodeToPush.next = currentTop;
        this.length++;
        return this;
    }

    logger() {
        let currentIndex = this.length;
        let currentNode = this.top;
        while (currentIndex > 0) {
            console.log(
                `| Node ${currentIndex} | Value ${currentNode.value} | Next ${
                    currentNode.next && currentNode.next.value
                }`
            );
            currentIndex--;
            currentNode = currentNode.next;
        }
        console.log('-------------------------');
        return currentNode;
    }

    pop() {
        if (!this.length) return;
        this.top = this.top.next;
        this.length--;
        if (!this.length) this.bottom = null;
        return this;
    }
}

class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.pop();
myStack.logger();
