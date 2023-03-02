//Find biggest number in an array
export function findMax(array: number[]) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return `The biggest number is ${max}.`;
}
