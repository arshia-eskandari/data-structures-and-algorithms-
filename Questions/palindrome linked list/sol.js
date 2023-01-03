// Given the head of a singly linked list, return true if it is a
// palindrome or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return true;
    const nodeValArray = [];
    let currentNode = head;
    while (true) {
        nodeValArray.push(currentNode.val);
        if (!currentNode.next) break;
        currentNode = currentNode.next;
    }
    let i = 0;
    let j = nodeValArray.length - 1;
    while (i <= j) {
        if (nodeValArray[i] !== nodeValArray[j]) return false;
        i++;
        j--;
    }
    return true;
};
