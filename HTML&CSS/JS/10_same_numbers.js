function checkSameDigits(number) {
    let numString = number.toString();
    let firstDigit = numString[0];
    let sum = 0;
    let allSame = true;

    for (let digit of numString) {
        sum += parseInt(digit);
        if (digit !== firstDigit) {
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(sum);
}

// Example usage
checkSameDigits(2222222); // Output: true, 8
checkSameDigits(1234); // Output: false, 10
