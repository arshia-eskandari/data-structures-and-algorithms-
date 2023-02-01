class MyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    // queue
    push(x) {
        for (let i = this.last.length - 1; i > -1; i--) {
            this.first.push(this.last[i]);
            this.last.pop();
        }
        this.first.push(x);
    }

    // dequeue
    pop() {
        for (let i = this.first.length - 1; i > -1; i--) {
            this.last.push(this.first[i]);
            this.first.pop();
        }
        return this.last.pop();
    }

    empty() {
        if (!this.first.length && !this.last.length) return true;
        else return false;
    }

    peek() {
        if (this.empty()) return null;
        else if (!this.first.length) return this.last[this.last.length - 1];
        else return this.first[0];
    }
}
