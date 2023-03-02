function findNum(nums) {
	let minNumber = nums[0];
	let maxNumber = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (numbers[i] < minNumber) {
			minNumber = nums[i];
		}
		if (numbers[i] > maxNumber) {
			maxNumber = nums[i];
		}
	}

	return { min: minNumber, max: maxNumber };
}

module.exports = findNum;
