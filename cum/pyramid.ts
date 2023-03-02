export function pyramid(height: number) {
	for (let i = 1; i <= height; i++) {
		let stair = "";
		for (let k = 0; k < i; k++) {
			stair += "X";
		}
		console.log(stair);
	}
	for (let i = height - 1; i > 0; i--) {
		let stair = "";
		for (let k = 0; k < i; k++) {
			stair += "X";
		}
		console.log(stair);
	}
}
