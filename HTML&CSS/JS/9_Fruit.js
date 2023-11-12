function calculateFruitCost(fruit, weightInGrams, pricKg) {
    let weightInKg = weightInGrams / 1000;
    let totalCost = weightInKg * pricKg;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

// Example usage
calculateFruitCost('orange', 2500, 1.80); // Output: I need $2.70 to buy 1.50 kilograms orange.
