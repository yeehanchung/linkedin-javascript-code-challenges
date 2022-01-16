// Solution 2: encapsulation

class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.numCopies = numCopies;
	}

	get availability() {
		return this.getAvailability();
	}

	getAvailability() {
		if (this.numCopies === 0) {
			return 'out of stock';
		} else if (this.numCopies < 10) {
			return 'low stock';
		}
		return 'in stock';
	}

	sell(numCopiesSold = 1) {
		this.numCopies -= numCopiesSold;
	}

	restock(numCopiesRestocked = 5) {
		this.numCopies += numCopiesRestocked;
	}
}

// Outputs:

const HungerGames2 = new Book('Hunger Games', 'Suzanne Collins', 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
