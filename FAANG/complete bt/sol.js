const getTreeHeight = (root) => {
    let height = 0;
    while(root.left) {
        height++;
        root = root.left
    }
    return height;
}

const nodeExists = (idx, height, root) => {
    let count = 0, l = 0, r = Math.pow(2, height) - 1;

    while (count < height) {
        const mid = Math.ceil((l + r) / 2);

        if (idx >= mid) {
            root = root.right;
            l = mid;
        } else {
            root = root.left;
            r = mid - 1
        }

        count++;
    }

    return root !== null;
}

var countNodes = function(root) {
    if (!root) return 0;
    const height = getTreeHeight(root);
    if (height === 0) return 1;
    const upperCount = Math.pow(2, height) - 1;
    let l = 0, r= upperCount;

    while (l < r) {
        const mid = Math.ceil((l + r) / 2);
        if (nodeExists(mid, height, root)) l = mid;
        else r = mid - 1;
    }

    return upperCount + l + 1;
};