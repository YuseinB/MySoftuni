function sumDigits(number) {
    let numString = number.toString();
    let sum = 0;

    for (let digit of numString) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(sumDigits(245678)); // Output: 6
console.log(sumDigits(97561)); // Output: 6
console.log(sumDigits(543)); // Output: 6
