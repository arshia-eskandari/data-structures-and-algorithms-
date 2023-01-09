// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = '';
    let num2 = '';
    let current1 = l1;
    let current2 = l2;
    while (true) {
        if (current1) {
            num1 = `${current1.val}` + num1;
            current1 = current1.next;
        }
        if (current2) {
            num2 = `${current2.val}` + num2;
            current2 = current2.next;
        }
        if (!current1 && !current2) break;
    }
    if (num1 === '') num1 = 0;
    else num1 = parseInt(num1);
    if (num2 === '') num2 = 0;
    else num2 = parseInt(num2);
    const result = [...`${num1 + num2}`];
    const newHead = new ListNode(parseInt(result[result.length - 1]));
    let currentNode = newHead;
    for (let i = result.length - 2; i > -1; i--) {
        const nextNode = new ListNode(parseInt(result[i]));
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return newHead;
};
