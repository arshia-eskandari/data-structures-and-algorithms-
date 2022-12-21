// Given an integer array nums where the elements are sorted
// in ascending order, convert it to a
// height-balanced binary search tree.

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const len = nums.length;
    if (!len) return;
    const midPoint = Math.floor(len / 2);
    const root = new TreeNode(nums[midPoint]);
    if (len === 1) return tree;
    if (len === 2) {
        tree.right = new TreeNode(nums[1])
        return tree;
    }
    let left = midPoint - 1;
    let right = midPoint + 1;
    root.left = new TreeNode(nums[left]);
    root.right = new TreeNode(nums[right]);
    left--;
    right--;
    let currentLeftNode = root.left;
    let currentRightNode = root.right;
    while (left > -1 || right < len) {
        if (left > -1) {
            currentLeftNode.left = nums[left];
            left--;
        }
        if (right < len) {
            currentRightNode.right = nums[right];
            right++;
        }
    }
    return root;
};