function checkPassword(password) {
	let oneLowerCaseLetter = /(?=.+[a-z])/;
	let oneUpperCaseLetter = /(?=.+[A-Z])/;
	let oneDigit = /(?=.+[0-9])/;
	let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
	let minimumEightCharacters = /(?=.{8,})/;
	let isValid =
		oneLowerCaseLetter.test(password) &&
		oneUpperCaseLetter.test(password) &&
		oneDigit.test(password) &&
		oneSpecialCharacter.test(password) &&
		minimumEightCharacters.test(password);

	return isValid ? 'Your password is valid' : 'Your password is invalid';
}

console.log(checkPassword('123123qwe.')); // invalid
console.log(checkPassword('12qwe123@.W')); // valid
