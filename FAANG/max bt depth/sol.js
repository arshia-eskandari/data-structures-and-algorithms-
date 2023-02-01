const dFS = (node, count) => {
    if (!node) return count;
    count++;
    return Math.max(dFS(node.left, count), dFS(node.right, count));
};

var maxDepth = function (root) {
    if (!root) return 0;
    return dFS(root, 0);
};
