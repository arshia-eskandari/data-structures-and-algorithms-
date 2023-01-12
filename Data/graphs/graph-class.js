class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (this.adjacentList.node !== undefined) return this;
        this.numberOfNodes++;
        this.adjacentList[node] = [];
    }

    addEdge(node1, node2) {
        if (this.adjacentList[node1] === undefined) return this;
        if (this.adjacentList[node2] === undefined) return this;
        if (this.adjacentList[node1].includes(node2)) return this;

        //undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);

        return this;
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = '';
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + ' ';
            }
            console.log(node + '-->' + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

const dFS = (node, adjList, visited) => {
    if (node in visited) return;
    visited[node] = true;

    const neighbors = adjList[node];
    for (let neighbor of neighbors) {
        if (neighbor in visited) continue;
        else dFS(neighbor, adjList, visited);
    }
};

const dFSComponent = (node, adjList, visited, comp) => {
    if (node in visited) return;
    visited[node] = true;
    comp.push(node);

    const neighbors = adjList[node];
    for (let neighbor of neighbors) {
        if (neighbor in visited) continue;
        else dFS(neighbor, adjList, visited);
    }
};

const dFSconnectedComps = adjList => {
    const connectedComps = [];
    const nodes = Object.keys(adjList);
    const visited = {};

    for (let node of nodes) {
        if (node in visited) continue;
        const comp = [];
        dFSComponent(node, adjList, visited, comp);
        connectedComps.push(comp);
    }
    return connectedComps;
};

const bFS = (s, adjList) => {
    const queue = [];
    queue.push(s);

    const visited = {};
    visited[s] = true;

    const nodeArr = [];
    nodeArr.push(s);

    while (queue.length !== 0) {
        const node = queue.pop();
        const neighbors = adjList[node];

        for (let neighbor of neighbors) {
            if (neighbor in visited) continue;
            queue.push(neighbor);
            visited[neighbor] = true;
            nodeArr.push(neighbor);
        }
    }
    return nodeArr;
};

// const bFSTarget = (s, e, adjList) => {
//     const queue = [];
//     queue.push(s);

//     const visited = {};
//     visited[s] = true;

//     const nodeArr = [];
//     nodeArr.push([s]);

//     let startBackTracking = false;
//     let lvl = 0;
//     while (queue.length !== 0) {
//         const node = queue.pop();
//         const neighbors = adjList[node];

//         nodeArr.push([]);
//         for (let neighbor of neighbors) {
//             if (neighbor in visited) continue;
//             console.log(lvl, neighbor)
//             if (neighbor === e) {
//                 console.log(nodeArr)
//                 startBackTracking = true;
//                 break;
//             }
//             queue.push(neighbor);
//             visited[neighbor] = true;
//             nodeArr[nodeArr.length - 1].push(neighbor);
//         }
        
//         if (queue.length === 0) return -1;
//         lvl++;
//         if (startBackTracking) break;
//     }
//     nodeArr.pop();  
    
//     console.log(nodeArr)
//     let vertex = e;
//     const shortestPath = new Array(lvl + 1);
//     shortestPath[lvl] = e;
//     for (let i  = nodeArr.length - 1; i > -1; i--) {
//         for (let j = 0; j < nodeArr[i].length; j++) {
//             if (adjList[vertex].includes(nodeArr[i][j])) {
//                 lvl--
//                 vertex = nodeArr[i][j];
//                 shortestPath[lvl] = vertex;
//                 break;
//             }
//         }
//     }
//     return shortestPath;
// }

console.log(bFS('0', myGraph.adjacentList));
