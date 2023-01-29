const reverseList = function (head) {
    if (!head || !head.next) return head;

    let prev = null;
    let curr = head;
    let next = head.next;

    while (next) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = next.next;
        curr.next = prev;
    }

    return curr;
};
