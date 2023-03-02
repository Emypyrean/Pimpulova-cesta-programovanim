//find smallest number in an array
function findMin(ARRAY) {
	let min = ARRAY[0];
	for (let i = 1; i < ARRAY.length; i++) {
		if (ARRAY[i] < min) {
			min = ARRAY[i];
		}
	}
	return `The smallest number is ${min}.`;
}

module.exports = findMin;
