/**
 * Instead of running array filter method,
 * mapping the new array. Use reduce to
 * only pass through the array once.
 */
function coffeeDate(coffeeArr) {
	/**
	 * 1st arg: accumulator
	 * 2nd arg: current array value
	 */
	let coffeeSum = coffeeArr.reduce(
		(totalCoffees, numCoffees) => (totalCoffees += numCoffees)
	);
	return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 4, 5, 9, 12]));
