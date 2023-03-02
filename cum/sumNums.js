//this functions will sum all numbers in the array

function sumNums(nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result += nums[i];
	}
	return result;
}

module.exports = sumNums; //const sumNums = require("./cum/sumNums.js");
