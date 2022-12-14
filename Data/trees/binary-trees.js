class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    hasNoChildren(node) {
        if (node.right === null && node.left === null) return true;
        return false;
    }

    insert(value) {
        const nodeToInsert = new Node(value);
        if (!this.root) {
            this.root = nodeToInsert;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value >= currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = nodeToInsert;
                    break;
                }
                currentNode = currentNode.right;
            } else {
                if (!currentNode.left) {
                    currentNode.left = nodeToInsert;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
        return this;
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
