const dFS = (id, adjList, informTime) => {
    if (!adjList[id].length) return 0;

    let max = 0;
    for (const subID of adjList[id]) {
        max = Math.max(max, dFS(subID, adjList, informTime));
    }

    return max + informTime[id];
};

var numOfMinutes = function (n, headID, managers, informTime) {
    const adjList = managers.map(() => []);

    for (let employee = 0; employee < n; employee++) {
        const manager = managers[employee];
        if (manager === -1) continue;

        adjList[manager].push(employee);
    }

    return dFS(headID, adjList, informTime);
};
