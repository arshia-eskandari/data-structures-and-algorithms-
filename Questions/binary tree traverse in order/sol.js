// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const traverseInOrder = (node, list) => {
    if (node?.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node?.val);
    if (node?.right) {
        traverseInOrder(node.right, list);
    }
    return list
};

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return [];
    return traverseInOrder(root, [])
};