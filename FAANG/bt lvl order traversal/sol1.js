const bFS = (node, array) => {
    let stack = [];
    stack.push(node);

    while (stack.length) {
        const lvlArr = [];
        const temp = stack;

        for (let node of stack) {
            if (!node) continue;
            lvlArr.push(node.val);
        }
        if (lvlArr.length) array.push(lvlArr);
        stack = [];

        for (let node of temp) {
            if (!node) continue;
            stack.push(node.left);
            stack.push(node.right);
        }
    }
};

var levelOrder = function (root) {
    const lvlOrderArr = [];
    if (!root) return lvlOrderArr;
    bFS(root, lvlOrderArr);
    return lvlOrderArr;
};
