var trap = function (height) {
    let pL = 0,
        pR = height.length - 1,
        total = 0,
        leftMax = 0,
        rightMax = 0;
    while (pL < pR) {
        if (height[pL] <= height[pR]) {
            if (height[pL] >= leftMax) leftMax = height[pL];
            else total += leftMax - height[pL];
            pL++;
        } else {
            if (height[pR] >= rightMax) rightMax = height[pR];
            else total += rightMax - height[pR];
            pR--;
        }
    }
    return total;
};

var trapBruteForce = function (height) {
    let totalWater = 0;

    for (let p = 0; p < height.length; p++) {
        let leftP = p,
            rightP = p,
            maxLeft = 0,
            maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, height[leftP]);
            leftP--;
        }

        while (rightP < height.length) {
            maxRight = Math.max(maxRight, height[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - height[p];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
};
