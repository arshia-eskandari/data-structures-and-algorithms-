const dFS = (node, lowerBound, upperBound) => {
    if (!node) return true;
    if (node.val <= lowerBound) return false;
    if (node.val >= upperBound) return false;
    return (
        dFS(node.left, lowerBound, node.val) &&
        dFS(node.right, node.val, upperBound)
    );
};

var isValidBST = function (root) {
    return dFS(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
