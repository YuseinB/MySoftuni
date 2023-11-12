function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "yes";
    } else {
        return "no";
    }
}

// Example usage
console.log(isLeapYear(1984));  // Output: yes
console.log(isLeapYear(2003));  // Output: no
console.log(isLeapYear(4));  // Output: yes
