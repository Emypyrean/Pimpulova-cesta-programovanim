export function addNums(max: number) {
	let sum = 0;
	for (let i = 0; i <= max; i++) {
		if (i % 5 === 0) sum += i;
	}
	return sum;
}
