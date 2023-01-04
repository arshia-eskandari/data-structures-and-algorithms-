// Design a stack that supports push, pop, top, and retrieving the
// minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class Node {
    constructor(val) {
        this.val = val;
        this.minSoFar = null;
        this.next = null;
    }
}

class MinStack {
    constructor() {
        this.t = null;
        this.b = null;
        this.length = 0;
    }

    top() {
        return this.t.val;
    }

    getMin() {
        return this.t && this.t.minSoFar;
    }

    push(val) {
        const newTop = new Node(val);
        this.length++;
        if (this.length === 1) {
            this.t = newTop;
            this.b = this.t;
            this.t.minSoFar = val;
            return;
        }
        const minSoFar = this.t.minSoFar;
        const oldTop = this.t;
        this.t = newTop;
        this.t.next = oldTop;
        if (minSoFar > val) this.t.minSoFar = val;
        else this.t.minSoFar = minSoFar;
    }

    pop() {
        if (!this.length) return;
        this.t = this.t.next;
        this.length--;
        if (!this.length) this.b = null;
    }
}
