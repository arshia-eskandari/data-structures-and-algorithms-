const traverseInOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.val);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list
};

const DFSInOrderModified = (root) => {
    const list = traverseInOrder(root, []);
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= list[i+1]) return false;
    }
    return true
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return DFSInOrderModified(root);
};