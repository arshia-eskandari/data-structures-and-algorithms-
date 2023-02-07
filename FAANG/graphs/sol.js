const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
];

const bFS = adjList => {
    if (!adjList.length) return [];
    const ans = [];
    visited = {};
    const q = [0];

    while (q.length) {
        const len = q.length;
        let count = 0;

        while (count < len) {
            const node = q.shift();
            ans.push(node);
            visited[node] = true;
            for (const n of adjList[node]) if (!visited[n]) q.push(n);
            count++;
        }
    }

    return ans;
};

const dFS = (adjList, array, curr, visited) => {
    if (!visited[curr]) {
        array.push(curr);
        visited[curr] = true;

        for (const n of adjList[curr])
            if (!visited[n]) dFS(adjList, array, n, visited);
    }
};
