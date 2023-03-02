//We will send the welcome message to all users
export function welcomeAllUsers(userNames: string) {
	for (let j = 0; j < userNames.length; j++) {
		console.log(`Hello ${userNames[j]}, nice to see you here!`);
	}
}
