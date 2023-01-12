// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.

const dFS = (node, maxHash, count) => {
    count++;
    if (node.left) dFS(node.left, maxHash, count);
    if (node.right) dFS(node.right, maxHash, count);
    if (count > maxHash.max) maxHash.max = count;
    
}

var maxDepth = function(root) {
    if (!root) return 0;
    const maxHash = {max: 1};
    dFS(root, maxHash, 0);
    return maxHash.max
}