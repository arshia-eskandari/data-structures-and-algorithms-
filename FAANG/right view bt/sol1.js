const rightSideViewBFS = function (root) {
    if (!root) return [];
    const result = [];
    let queue = [root];

    while (queue.length) {
        let length = queue.length,
            count = 0,
            currentNode;

        while (count < length) {
            currentNode = queue.shift();

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            count++;
        }

        result.push(currentNode.value);
    }

    return result;
};
