let karel = 10; // CAN REWRITE LATER FOR NEW VALUE (INT/FLOAT...)
const pepa = 3;
var nope; //DONT USE//

//const result = karel + pepa; // 8**2 = na druhou 10%3 = 1 > celočíselný zbytek po dělení

// bmi
//inch to cm
const inch = 2.5;
let number = 10;

//const result = number * inch;
//velocity
let meter = 50;
let second = 8;

//const result = meter * second;
//bmi
//const heigth = 1.8;
//const weight = 90;

//const result = weight / height**2;

//String
const stringA = "Peenus";
const stringB = "69";
//const result = `${stringA}, ${stringB}, Bussi. ${5 + 3 + 8}! :)`;

//Array
const array = [5, 4, 8, 7, "sda", "sadsfd", [548, "test", 4], 54];
//console.log(array); //array position starts with 0

//Functions
function biggerNumber(a, b) {
	//code
	return a >= b; //<> >= <= == != (===/!== compares datatypes)
}
function numCompare(a, b) {
	if (a < b) {
		return `${a} is smaller than ${b}`;
	}
	if (a > b) {
		return `${a} is bigger than ${b}`;
	}
	return `${a} is equal to ${b}`;
}
const result = numCompare(1, 6); // "1 is smaller than 6"
const result2 = numCompare(22, 8); //"22 is bigger than 8"
//console.log(result, result2, numCompare(9, 9)); //"9 is equal to 9"

const score = -2;
function golfScore(score) {
	if (score == -4) {
		return `Condor`;
	}
	if (score == -3) {
		return `Albatross`;
	}
	if (score == -2) {
		return `Eagle`;
	}
	if (score == -1) {
		return `Birdie`;
	}
	if (score == 0) {
		return `Par`;
	}
	if (score == 1) {
		return `Bogey`;
	}
	if (score == 2) {
		return `Double Bogey`;
	}
	if (score == 3) {
		return `Triple Bogey`;
	}
}
const result3 = golfScore(score);
//console.log(result3);

function BMI(height, weight) {
	const BMI1 = weight / height ** 2;

	if (BMI1 < 18.5) {
		return `Your BMI is ${BMI1}. You are Underweight.`;
	}
	if (BMI1 <= 24.9) {
		return `Your BMI is ${BMI1}. You are Normal.`;
	}
	if (BMI1 <= 29.9) {
		return `Your BMI is ${BMI1}. You are Overweight.`;
	}
	if (BMI1 <= 34.9) {
		return `Your BMI is ${BMI1}. You are Obese.`;
	}
	if (BMI1 > 35) {
		return `Your BMI is ${BMI1}. You are Extremely Obese.`;
	}
}
result4 = BMI(1.8, 90);
//console.log(result4);
