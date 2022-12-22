// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be
// made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null && list2 === null) return list1;
    if (list2 === null) return list1;
    if (list1 === null) return list2;
    let current1 = list1;
    let current2 = list2;
    let newList;
    if (current1.val > current2.val) {
        newList = new ListNode(current2.val);
        current2 = current2.next;
    } else {
        newList = new ListNode(current1.val);
        current1 = current1.next;
    }
    let currentNew = newList;
    while (true) {
        if (current1 === null && current2 === null) break;
        if (current1 === null) {
            currentNew.next = new ListNode(current2.val);
            current2 = current2.next;
            currentNew = currentNew.next;
            continue;
        }
        if (current2 === null) {
            currentNew.next = new ListNode(current1.val);
            current1 = current1.next;
            currentNew = currentNew.next;
            continue;
        }
        if (current1.val > current2.val) {
            currentNew.next = new ListNode(current2.val);
            current2 = current2.next;
            currentNew = currentNew.next;
        } else {
            currentNew.next = new ListNode(current1.val);
            current1 = current1.next;
            currentNew = currentNew.next;
        }
    }
    return newList;
};
