// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct 
// ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var array = [0, 1, 2];
    for(var i = 3; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};