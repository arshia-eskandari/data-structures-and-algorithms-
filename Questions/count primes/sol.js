// Given an integer n, return the number of prime numbers that are strictly less than n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let sieve = new Array(n).fill(true);
    let primes = [];
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = Math.pow(i, 2); j < n; j += i) {
                sieve[j] = false;
            }
        }
    }
    sieve.forEach((e, i) => {
        if (e && i > 1) primes.push(i);
    });

    return primes.length;
};
