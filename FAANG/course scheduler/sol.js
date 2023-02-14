var canFinish = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adjList = inDegree.map(() => []);

    for (const preq of prerequisites) {
        const [first, second] = preq;
        inDegree[first]++;
        adjList[second].push(first);
    }

    const stack = [];
    for (let i = 0; i < inDegree.length; i++)
        if (inDegree[i] === 0) stack.push(i);

    let count = 0;

    while (stack.length) {
        const curr = stack.pop();
        const adj = adjList[curr];
        count++;
        for (const idx of adj) {
            inDegree[idx]--;
            if (inDegree[idx] === 0) stack.push(idx);
        }
    }

    return count === numCourses;
};
