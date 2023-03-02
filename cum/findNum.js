const findMin = require("/findMin.js");
const findMax = require("/findMax.js");
function findNum(nums, type) {
	if (type === "max") return findMax(nums);
	if (type === "min") return findMin(nums);
}

module.exports = findNum;
