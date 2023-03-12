const directions = [
    [2, 1], 
    [2, -1], 
    [-2, 1], 
    [-2, -1], 
    [1, 2], 
    [1, -2], 
    [-1, 2], 
    [-1, -2]
];

var knightProbability = function(n, k, r, c) {
    const memo = {};
    
    function findProbs(k, r, c) {
        const key = `${k}#${r}#${c}`;
        
        if (isInvalid(r, c)) return 0.0; 
        if (k === 0) return 1.0;
        if (key in memo) return memo[key];
        
        let prob = 0;
        
        for (const [d1, d2] of directions) {
            prob += 0.125 * findProbs(k - 1, r + d1, c + d2);
        }
        
        memo[key] = prob;
        
        return prob;
        
    }
    
    function isInvalid(row, col) {
        return row < 0 || col < 0 || row >= n || col >= n;
    }

    return findProbs(k, r, c);
};