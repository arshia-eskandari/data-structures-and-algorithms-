var flatten = function (head) {
    if (!head) return head;

    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            let tail = currentNode.child;
            while (tail.next !== null) {
                tail = tail.next;
            }

            tail.next = currentNode.next;
            if (tail.next !== null) {
                tail.next.prev = tail;
            }

            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }

    return head;
};

// const traverseAndAttach = (start, mid, end) => {
//     let curr, next;
//     if (mid) {
//         curr = mid;
//         start.next = curr;
//         curr.prev = start;
//     } else {
//         curr = start;
//     }
//     next = curr.next;

//     while (next || curr?.child) {
//         if (curr.child) {
//             traverseAndAttach(curr, curr.child, next);
//             curr.child = null;
//         }
//         curr = next;
//         next = curr?.next;
//     }
//     if (end) end.prev = curr;
//     if (curr) curr.next = end;
// };

// var flatten = function (head) {
//     if (!head) return head;
//     traverseAndAttach(head, null, null);
//     return head;
// };
