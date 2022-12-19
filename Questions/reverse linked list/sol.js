// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head;
    if (!head.next) return head;
    let currentNode = head;
    let nextNode = head.next;
    currentNode.next = null;
    while (true) {
        [nextNode.next, nextNode, currentNode] = [
            currentNode,
            nextNode.next,
            nextNode,
        ];
        if (!nextNode) break;
    }
    return currentNode;
};
