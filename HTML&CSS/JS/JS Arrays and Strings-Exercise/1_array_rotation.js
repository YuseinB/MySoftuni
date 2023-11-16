function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let arrayElement = arr.shift();
        arr.push(arrayElement);
    }
    return arr.join(' ');
}

// Example usage
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: 3 4 5 1 2
