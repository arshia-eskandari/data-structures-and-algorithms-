const twoSum = (array, target) => {
    const visited = {};
    for (let i = 0; i < array.length; i++) {
        if (target - array[i] in visited) return [i, visited[target - array[i]]];
        visited[array[i]] = i
    }
    return null;
}