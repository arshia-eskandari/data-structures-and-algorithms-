const reverseLL = function (head, cutOffIndex) {
    if (!head || !head.next) return head;
    let currentPos = 1,
        prev = null,
        curr = head,
        next = head.next;
    const originalHead = head;

    while (currentPos < cutOffIndex) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = next.next;
        curr.next = prev;
        currentPos++;
    }

    originalHead.next = next;
    return curr;
};

const reverseBetween = function (head, left, right) {
    const originalHead = head;
    // I do not think the positioning at 1 is standard but that is how the question works
    let currentPos = 1,
        currentNode = head;

    while (currentPos < left - 1) {
        currentPos++;
        currentNode = currentNode.next;
    }

    if (left === 1) {
        // if left is one we cannot go to the next node
        const reversedCutoff = reverseLL(currentNode, right - left + 1);
        return reversedCutoff;
    } else {
        // in any other case we cut off the linked list and reattach it
        const reversedCutoff = reverseLL(currentNode.next, right - left + 1);
        currentNode.next = reversedCutoff;
        return originalHead;
    }
};
