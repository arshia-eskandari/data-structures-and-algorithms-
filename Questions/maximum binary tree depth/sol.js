// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along
// the longest path from the root node down to the farthest leaf node.

// const tree = {
//     val: 9,
//     left: {
//         val: 4,
//         left: { val: 1, left: null, right: null },
//         right: { val: 6, left: null, right: null },
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15,
//             left: {
//                 val: 40,
//                 left: null,
//                 right: {
//                     val: 10,
//                     right: null,
//                     left: null,
//                 },
//             },
//             right: null,
//         },
//         right: { val: 170, left: null, right: null },
//     },
// };

// const traverse = (node, list, length) => {
//     if (node.right) traverse(node.right, list, length + 1);
//     if (node.left) traverse(node.left, list, length + 1);
//     if (!node.right && !node.left) list.push(length);
//     return list;
// }

// const findMax = (arr) => {
//     if (!arr) return 0;
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) max = arr[i];
//     }
//     return max
// }

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function(root) {
//     if (!root) return 0;
//     return findMax(traverse(root, [], 1));
// };

const dFS = (node, maxObj, count) => {
    count++;
    if (node.left) dFS(node.left, maxObj, count);
    if (node.right) dFS(node.right, maxObj, count);
    if (!node.left && !node.right) {
        if (!maxObj.max) maxObj.max = count;
        else if (count > maxObj.max) maxObj.max = count;
    }
};

var maxDepth = function (root) {
    if (!root) return 0;
    const maxObj = {};
    dFS(root, maxObj, 0);
    return maxObj.max;
};
