class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newTail = new Node(value);
        const oldTail = this.tail;
        oldTail.next = newTail;
        newTail.prev = oldTail;
        this.tail = newTail;
        this.length++;
        return this;
    }

    prepend(value) {
        const newHead = new Node(value);
        const oldHead = this.head;
        newHead.next = oldHead;
        oldHead.prev = newHead;
        this.head = newHead;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    logger() {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex < this.length) {
            console.log(
                `| Node ${currentIndex} | Value ${currentNode.value} | Next ${
                    currentNode.next && currentNode.next.value
                } | Previous ${currentNode.prev && currentNode.prev.value}`
            );
            currentIndex++;
            currentNode = currentNode.next;
        }
        console.log('-------------------------');
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index >= this.length - 1) {
            this.append(value);
            return this;
        }
        const prevNode = this.traverseToIndex(index - 1);
        const newNextNode = prevNode.next;
        const newNode = new Node(value);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = newNextNode;
        newNextNode.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) return;
        const prevNode = this.traverseToIndex(index - 1);
        if (prevNode.next === this.tail) {
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            const newNextNode = prevNode.next.next;
            prevNode.next = newNextNode;
            newNextNode.prev = prevNode;
        }
        this.length--;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.logger();
myLinkedList.append(5);
myLinkedList.logger();
myLinkedList.append(16);
myLinkedList.logger();
myLinkedList.prepend(-1);
myLinkedList.logger();
myLinkedList.insert(1, -2);
myLinkedList.logger();
myLinkedList.insert(3, 15);
myLinkedList.logger();
myLinkedList.remove(1);
myLinkedList.logger();
myLinkedList.remove(4);
myLinkedList.logger();

// -1 <-> -2 <-> 10 <-> 15 <-> 5 <-> 16
