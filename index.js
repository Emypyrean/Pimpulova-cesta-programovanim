let numbers = [8, 4, 7, 9];
const arithmeticMean = require("./cum/arithmeticMean.js");
console.log(arithmeticMean(numbers));

let array = [9, 7, 8, 4, 6];
const findMax = require("./cum/findMax.js");
console.log(findMax(array));

let ARRAY = [7, 4, 8, 6];
const findMin = require("./cum/findMin.js");
console.log(findMin(ARRAY));

//najít největší nebo nejmenší číslo podle parametru (max/min)
//findNum([7, 8, 9, 6]);

//Sečíst čísla od 1 do 100, která nejsou dělitelná 5
let nums = [8, 6, 5, 3, 2, 14];
const { min, max } = findNums(nums);
const findNum = require("./cum/findNum.js");
console.log(min);
console.log(max);

const factorial = require("./cum/factorial.js");
console.log(factorial(5));
