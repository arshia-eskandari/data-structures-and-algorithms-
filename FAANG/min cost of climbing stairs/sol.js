var minCostClimbingStairs = function (costs) {
    const n = costs.length;
    if (n === 0) return 0;
    if (n === 1) return costs[0];
    let dpOne = costs[0];
    let dpTwo = costs[1];
    for (let i = 2; i < n; i++) {
        const curr = costs[i] + Math.min(dpOne, dpTwo);
        dpOne = dpTwo;
        dpTwo = curr;
    }

    return Math.min(dpOne, dpTwo);
};
