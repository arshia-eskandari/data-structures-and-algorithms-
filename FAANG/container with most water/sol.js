var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const currentArea =
            Math.min(height[left], height[right]) * (right - left);
        if (maxArea < currentArea) maxArea = currentArea;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
};

var maxAreaBruteForce = function (height) {
    let i = 0;
    let j = 1;
    let maxArea = 0;
    while (j < height.length) {
        const area = Math.min(height[i], height[j]) * (j - i);
        if (area > maxArea) maxArea = area;
        if (j === height.length - 1) {
            j = ++i + 1;
            continue;
        }
        j++;
    }
    return maxArea;
};
