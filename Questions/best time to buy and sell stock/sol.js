// You are given an array prices where prices[i] is the
// price of a given stock on the ith day.

// You want to maximize your profit by choosing a
// single day to buy one stock and choosing a
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let currentProfit = prices[right] - prices[left];

            profit = Math.max(profit, currentProfit);
        } else {
            left = right;
        }
        right++;
    }
    return profit;
};
