//Cycles
let x = 0;
while (x <= 10) {
	//console.log("test", x);
	//x = x + 1;
	x++; // propíše řádek a inkrementuje
	++x; // inkrementuje a propíše řádek
}

for (let i = 0; i <= 10; i = i + 1) {
	//console.log("test2", i);
}
// result *= 3; // result = result * 3 (result **= 3)

const nums = [0, 1, 2, 3, 4, 5];
nums[3] *= 3;
//console.log(nums);

//Imported Function
const sumNums = require("./cum/sumNums.js");
console.log(sumNums([1, 2, 3])); //6

const welcomeAllUsers = require("./cum/welcomeAllUsers.js");
welcomeAllUsers("Josef", "Karel", "Alžběta");
//console.log(result);
