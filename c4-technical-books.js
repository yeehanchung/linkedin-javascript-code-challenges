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

// Write your soluton here:

class TechnicalBook extends Book {
	constructor(title, author, ISBN, numCopies, edition) {
		super(title, author, ISBN, numCopies);
		this.edition = edition;
	}

	getEdition() {
		return `The current version of this book is ${this.edition}.`;
	}
}

const CrackingTheCodingInterview = new TechnicalBook(
	'Cracking The Coding Interview',
	'Gayle Laackmann McDowell',
	'1209123',
	7,
	'2.3'
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
