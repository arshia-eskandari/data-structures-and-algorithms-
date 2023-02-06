const dFS = (grid, i, j) => {
    if (
        i >= 0 &&
        j >= 0 &&
        i < grid.length &&
        j < grid[i].length &&
        grid[i][j] === '1'
    ) {
        grid[i][j] = '0';
        dFS(grid, i + 1, j);
        dFS(grid, i, j + 1);
        dFS(grid, i - 1, j);
        dFS(grid, i, j - 1);
    }
};

const numIslands = grid => {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dFS(grid, i, j);
            }
        }
    }

    return count;
};
