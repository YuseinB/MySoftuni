function cookingByNumbers(startingValue, ...operations) {
    let number = Number(startingValue);

    const operationsMap = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet': num => num * 0.8
    };

    for (let operation of operations) {
        number = operationsMap[operation](number);
        console.log(number);
    }
}

// Example usage
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); 
// Output: 
// 16
// 8
// 4
// 2
// 1
