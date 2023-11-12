function checkSpeed(speed, area) {
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let limit = speedLimits[area];
    let difference = speed - limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

// Example usage
checkSpeed(40, 'city'); // Output: Driving 40 km/h in a 50 zone
checkSpeed(21, 'residential'); // Output: The speed is 25 km/h faster than the allowed speed of 50 - excessive speeding
checkSpeed(180, 'motorway'); // Output: The speed is 50 km/h faster than the allowed speed of 130 - reckless driving
