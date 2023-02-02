const dFS = (node, currentLevel, result) => {
    if (!node) return;
    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    if (node.right) {
        dFS(node.right, currentLevel + 1, result);
    }

    if (node.left) {
        dFS(node.left, currentLevel + 1, result);
    }
};

var rightSideView = function (root) {
    const res = [];
    dFS(root, 0, res);
    return res;
};
