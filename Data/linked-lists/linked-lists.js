class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newTail = new Node(value);
        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;
        return this;
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
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
                }`
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
        newNode.next = newNextNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        if (index >= this.length) return;
        const prevNode = this.traverseToIndex(index - 1);
        if (prevNode.next === this.tail) {
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            const newNextNode = prevNode.next.next;
            prevNode.next = newNextNode;
        }
        this.length--;
        return this;
    }

    reverse() {
        // if (!this.head.next) return;
        // const valueArray = [];
        // let currentIndex = 0;
        // let currentNode = this.head;
        // while (currentIndex < this.length) {
        //     valueArray.push(currentNode.value);
        //     currentNode = currentNode.next;
        //     currentIndex++;
        // }
        // currentIndex--;
        // this.head.value = valueArray[currentIndex];
        // currentNode = this.head;
        // while (currentIndex > -1) {
        //     if (currentIndex === 0) {
        //         currentNode.next = null;
        //         this.tail = currentNode;
        //         break;
        //     }
        //     currentNode.next = new Node(valueArray[--currentIndex]);
        //     currentNode = currentNode.next;
        // }
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

    shiftLinkedList(k) {
        if (typeof k !== 'number') return this;
        let shiftsToDo = this.length - (k % this.length);
        if (!shiftsToDo) return this;
        let currentNode = this.head;
        let prevNode = this.tail;
        prevNode.next = currentNode;
        while (shiftsToDo > 0) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            this.tail = prevNode;
            shiftsToDo--;
        }
        this.head = currentNode;
        this.tail.next = null;
    }
}

const myLinkedList = new LinkedList(10);
// myLinkedList.logger();
myLinkedList.append(5);
// myLinkedList.logger();
myLinkedList.append(16);
// myLinkedList.logger();
myLinkedList.prepend(-1);
// myLinkedList.logger();
myLinkedList.insert(1, -2);
// myLinkedList.logger();
myLinkedList.insert(3, 15);
// myLinkedList.logger();
// myLinkedList.remove(1);
// myLinkedList.logger();
// myLinkedList.remove(4);
// myLinkedList.logger();
// myLinkedList.logger();
myLinkedList.reverse();
// myLinkedList.logger();
// console.log(myLinkedList);
myLinkedList.remove(0);
myLinkedList.logger();
myLinkedList.shiftLinkedList(2);
myLinkedList.logger();
// -1 -> -2 -> 10 -> 15 -> 5 > 16
