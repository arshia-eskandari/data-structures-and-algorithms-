// Given the root of a binary tree, check whether it is a mirror 
// of itself (i.e., symmetric around its center).

const checkForSymmetry = (left, right) => {
    if (!left && !right) return true;
    if (!left) return false;
    if (!right) return false;
    return left.val === right.val;
}

const isSymmetricR = (left, right, list) => {
    if (checkForSymmetry(left, right)) {
        if (left && right) {
            isSymmetricR(left.left, right.right, list);
            isSymmetricR(left.right, right.left, list);
        }
    } else {
        list.push(false);
    }
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
var isSymmetric = function(root) {
    const list = [];

    isSymmetricR(root.left, root.right, list);

    if (list[0] === false) return list[0];
    return true;
};