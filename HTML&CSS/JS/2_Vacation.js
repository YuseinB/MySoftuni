function calculateTotalPrice(groupCount, groupType, day) {
    let prices = {
        "Students": { "Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46 },
        "Business": { "Friday": 10.90, "Saturday": 15.60, "Sunday": 16 },
        "Regular": { "Friday": 15, "Saturday": 20, "Sunday": 22.50 }
    };

    let total = prices[groupType][day] * groupCount;

    if (groupType === "Students" && groupCount >= 30) {
        total *= 0.85;
    }

    if (groupType === "Business" && groupCount >= 100) {
        let freePeople = Math.floor(groupCount / 10);
        total = total - (freePeople * prices[groupType][day]);
    }

    if (groupType === "Regular" && groupCount >= 10 && groupCount <= 20) {
        total *= 0.95;
    }

    return `Total price: ${total.toFixed(2)}`;
}

// Example usage
console.log(calculateTotalPrice( 30, 'Students', 'Friday'));
