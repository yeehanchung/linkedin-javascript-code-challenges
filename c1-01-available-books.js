// Solution 1: function

function Book(title, author, ISBN, numCopies) {
	this.title = title;
	this.author = author;
	this.ISBN = ISBN;
	this.numCopies = numCopies;
}

/**
 * getAvailability function on the prototype
 * because declaring the function so each
 * instance doesn't create a new function.
 */
Book.prototype.getAvailability = function () {
	if (this.numCopies === 0) {
		return 'out of stock';
	} else if (this.numCopies < 10) {
		return 'low stock';
	}
	return 'in stock';
};

Book.prototype.sell = function (numCopiesSold = 1) {
	this.numCopies -= numCopiesSold;
};

Book.prototype.restock = function (numCopiesStocked = 5) {
	this.numCopies += numCopiesStocked;
};

// Outputs:

const HungerGames1 = new Book('Hunger Games', 'Suzanne Collins', 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
