//We will send the welcome message to all users
//
function welcomeAllUsers(userNames) {
	for (let j = 0; j < userNames.length; j++) {
		console.log(`Hello ${userName[j]}, nice to see you here!`);
	}
}

module.exports = welcomeAllUsers;
