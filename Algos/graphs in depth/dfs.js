// https://algodaily.com/lessons/implementing-graphs-edge-list-adjacency-list-adjacency-matrix/javascript

class Node {
    constructor(value) {
        this.value = value;
    }
}

class UndirectedGraph {
    constructor() {
        this.adjacencyList = new Map();
        this.numberOfNodes = 0;
        this.nodes = {};
        this.start = null;
    }

    addVertex(nodeValue) {
        if (nodeValue in this.nodes) return -1;
        const node = new Node(nodeValue);
        if (this.numberOfNodes === 0) this.start = node;
        this.nodes[nodeValue] = node;
        this.adjacencyList.set(node, []);
        this.numberOfNodes++;
        return this;
    }

    addEdge(node1Value, node2Value, weightOrDesc) {
        if (!(node1Value in this.nodes)) return -1;
        if (!(node2Value in this.nodes)) return -1;
        const node1 = this.nodes[node1Value];
        const node2 = this.nodes[node2Value];
        this.adjacencyList.get(node1).push([node2, weightOrDesc]);
        this.adjacencyList.get(node2).push([node1, weightOrDesc]);
        return this;
    }

    removeVertex(nodeValue) {
        if (!(nodeValue in this.nodes)) return -1;
        const nodeToRemove = this.nodes[nodeValue];
        delete this.nodes[nodeValue];
        this.numberOfNodes--;
        this.adjacencyList.delete(nodeToRemove);

        for (const array of this.adjacencyList.values())
            for (let i = 0; i < array.length; i++)
                if (array[i][0].value === nodeValue) array.splice(i, 1);

        return this;
    }

    removeEdge(node1Value, node2Value) {
        if (!(node1Value in this.nodes)) return -1;
        if (!(node2Value in this.nodes)) return -1;
        const node1 = this.nodes[node1Value];
        const node2 = this.nodes[node2Value];
        const neighbors1 = this.adjacencyList.get(node1);
        const neighbors2 = this.adjacencyList.get(node2);
        for (let i in neighbors1)
            if (neighbors1[i][0].value === node2Value) neighbors1.splice(i, 1);

        for (let j in neighbors2)
            if (neighbors2[j][0].value === node1Value) neighbors2.splice(j, 1);

        return this;
    }

    showList() {
        console.log(this.adjacencyList);
    }
}

const myGraph = new UndirectedGraph();
for (let i = 0; i < 13; i++) myGraph.addVertex(i);
myGraph.addEdge(0, 1, '0-1');
myGraph.addEdge(0, 9, '0-9');
myGraph.addEdge(1, 8, '1-8');
myGraph.addEdge(9, 8, '9-8');
myGraph.addEdge(8, 7, '8-7');
myGraph.addEdge(7, 10, '7-10');
myGraph.addEdge(7, 11, '7-11');
myGraph.addEdge(7, 6, '7-6');
myGraph.addEdge(7, 3, '7-3');
myGraph.addEdge(3, 5, '3-5');
myGraph.addEdge(3, 4, '3-4');
myGraph.addEdge(3, 2, '3-2');
myGraph.showList();

const dFS = (node, graph, visited, target, path = '') => {
    if (node.value in visited) return;
    visited[node.value] = true;
    path = path + `(${node.value})`;
    if (node.value === target) myGraph.path = path;

    const neighbors = graph.get(node);
    for (let neighbor of neighbors)
        dFS(neighbor[0], graph, visited, target, path);
};

dFS(myGraph.start, myGraph.adjacencyList, {}, 10);
console.log(myGraph.path);

// DFS for connected components
