const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

var orangesRotting = function (grid) {
    if (!grid.length) return 0;
    let min = 0,
        zeroCount = 0;
    const rotten = [];
    grid.forEach((row, i) =>
        row.forEach((col, j) => {
            if (col === 2) rotten.push([i, j]);
            if (col === 0) zeroCount++;
        })
    );

    while (rotten.length) {
        const len = rotten.length;
        let count = 0;

        while (count < len) {
            const [currX, currY] = rotten.shift();
            grid[currX][currY] = 0;
            zeroCount++;

            for (const [d1, d2] of directions) {
                if (grid[currX + d1] && grid[currX + d1][currY + d2] === 1) {
                    grid[currX + d1][currY + d2] = 2;
                    rotten.push([currX + d1, currY + d2]);
                }
            }

            count++;
        }

        if (rotten.length) min++;
    }

    if (zeroCount !== grid.length * grid[0].length) return -1;

    return min;
};
