class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const nodeToEnqueue = new Node(value);
        if (!this.length) {
            this.first = nodeToEnqueue;
            this.last = nodeToEnqueue;
            this.length++;
            return;
        }
        const currentLast = this.last;
        this.last = nodeToEnqueue;
        currentLast.next = nodeToEnqueue;
        this.length++;
        return this;
    }

    logger() {
        let currentIndex = 0;
        let currentNode = this.first;
        while (currentIndex < this.length) {
            console.log(
                `| Node ${currentIndex} | Value ${currentNode.value} | Next ${
                    currentNode.next && currentNode.next.value
                }`
            );
            currentIndex++;
            currentNode = currentNode.next;
        }
        console.log('-------------------------');
        return currentNode;
    }

    dequeue() {
        if (!this.length) return;
        this.first = this.first.next;
        this.length--;
        if (!this.length) this.last = null;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.logger();
