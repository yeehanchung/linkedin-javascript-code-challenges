/**
 * Not recursion
 */
// function numPermutations(letters) {
// 	let total;
// 	for (let i = 1; i <= letters.length; i++) {
// 		if (total === undefined) {
// 			total = i;
// 			continue;
// 		}
// 		total *= i;
// 	}
// 	return total;
// }

/**
 * Recursion
 *
 * Remember to have a base case to
 * avoid stack overflow error.
 */
function numPermutations(letters) {
	if (letters.length === 1) {
		return 1;
	}

	return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations('hello'));
