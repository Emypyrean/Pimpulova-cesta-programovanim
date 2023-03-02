//find smallest number in an array
export function findMin(array: number[]) {
	let min = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return `The smallest number is ${min}.`;
}
