//this functions will sum all numbers in the array

export function sumNums(nums: number[]) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result += nums[i];
	}
	return result;
}
