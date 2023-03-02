//Find biggest number in an array
function findMax(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return `The biggest number is ${max}.`;
}
module.exports = findMax;
