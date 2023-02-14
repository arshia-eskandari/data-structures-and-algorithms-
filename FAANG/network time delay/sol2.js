var networkDelayTime = function (times, n, k) {
    const distances = new Array(n).fill(Infinity);

    distances[k - 1] = 0;
    for (let i = 0; i < n - 1; i++) {
        let count = 0;
        for (let j = 0; j < times.length; j++) {
            const [source, target, weight] = times[j];

            if (distances[source - 1] + weight < distances[target - 1]) {
                distances[target - 1] = distances[source - 1] + weight;
                count++;
            }
        }

        if (count === 0) break;
    }

    const ans = Math.max(...distances);
    return ans === Infinity ? -1 : ans;
};
