//We will print 8 stairs into console
function printStairs(numOfStairs = 8, symbol = "*") {
	for (let i = 1; i <= numOfStairs; i++) {
		let stair = "";
		for (let k = 0; k < i; k++) {
			stair += symbol;
		}
		console.log(stair);
	}
}
module.exports = printStairs;
