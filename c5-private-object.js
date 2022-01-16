const username = Symbol('username');
const password = Symbol('password');

const user = {
	[username]: 'emmabostian',
	[password]: '1234566',
	age: '27',
};

// Output:

console.log(user.username);
console.log(user.password);
