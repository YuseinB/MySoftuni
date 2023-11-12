function Numbers(start, end) {
    let sum = 0;
    let numbers = '';

    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i;
    }

    console.log(numbers.trim());
    console.log('Sum: ' + sum);
}

// Example usage
Numbers(5, 10); // Numbers: 5 6 7 8 9 10, Sum: 45
Numbers(0, 26); // Numbers: 5 6 7 8 9 10, Sum: 45
Numbers(50, 60); // Numbers: 5 6 7 8 9 10, Sum: 45
