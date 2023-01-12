// Given the root of a binary tree, check
// whether it is a mirror of itself (i.e., symmetric around its center).

const isMirrored = (left, right) => {
    if (!left && !right) return true;
    if (!left) return false;
    if (!right) return false;
    if (left.val !== right.val) return false;
    if (left?.left?.val !== right?.right?.val) return false;
    if (left?.right?.val !== right?.left?.val) return false;
    return true;
};

var isSymmetric = function (root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left) return false;
    if (!root.right) return false;
    const leftQueue = [];
    const rightQueue = [];
    leftQueue.push(root.left);
    rightQueue.push(root.right);

    while (leftQueue.length !== 0 && rightQueue.length !== 0) {
        const currLeft = leftQueue.pop();
        const currRight = rightQueue.pop();

        if (!isMirrored(currLeft, currRight)) return false;
        if (currLeft.left) leftQueue.push(currLeft.left);
        if (currLeft.right) leftQueue.push(currLeft.right);
        if (currRight.right) rightQueue.push(currRight.right);
        if (currRight.left) rightQueue.push(currRight.left);
    }
    return true;
};
