class MaxHeap {
    constructor() {
        this._heap = [];
        this._size = 0;
    }

    swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    getParentIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftIdx(idx) {
        return idx * 2 + 1;
    }

    getRightIdx(idx) {
        return idx * 2 + 2;
    }

    insert(x) {
        const arr = this._heap;
        arr.push(x);
        this._size++;
        if (arr.length === 1) return;
        let idx = arr.length - 1;
        let parentIdx = this.getParentIdx(idx);
        while (arr[idx] > arr[parentIdx]) {
            this.swap(idx, parentIdx);
            idx = parentIdx;
            parentIdx = this.getParentIdx(idx);
        }
    }

    delete() {
        const arr = this._heap;
        if (!arr.length) return -1;
        this._size++;
        this.swap(0, arr.length - 1);
        const deleted = arr.pop();
        const len = arr.length;
        let idx = 0;
        let leftIdx = this.getLeftIdx(idx);
        let rightIdx = this.getRightIdx(idx);
        while (rightIdx < len || leftIdx < len) {
            const leftValue = arr[leftIdx];
            const rightValue = arr[rightIdx];

            if (rightValue === undefined && leftValue > arr[idx]) {
                this.swap(idx, leftIdx);
                idx = leftIdx;
            } else if (leftValue === undefined && rightValue > arr[idx]) {
                this.swap(idx, rightIdx);
                idx = rightIdx;
            } else if (leftValue > rightValue && leftValue > arr[idx]) {
                this.swap(idx, leftIdx);
                idx = leftIdx;
            } else if (rightValue > leftValue && rightValue > arr[idx]) {
                this.swap(idx, rightIdx);
                idx = rightIdx;
            } else {
                break;
            }

            leftIdx = this.getLeftIdx(idx);
            rightIdx = this.getRightIdx(idx);
        }

        return deleted;
    }

    peek() {
        return this._heap[0];
    }

    isEmpty() {
        return this._heap === 0;
    }

    size() {
        return this._size;
    }
}
