const findMin = require("./cum/findMin.js");
const findMax = require("./cum/findMax.js");
function findNum(nums, type) {
	if (type === "max") return findMax(nums);
	if (type === "min") return findMin(nums);
}

module.exports = findNum;
