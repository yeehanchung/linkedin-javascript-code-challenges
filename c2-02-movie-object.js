// Solution 2: encapsulation

class Movie {
	constructor(title, director, genre, releaseYear, rating) {
		this.title = title;
		this.director = director;
		this.genre = genre;
		this.releaseYear = releaseYear;
		this.rating = rating;
	}

	getOverview() {
		return `${this.title}, a ${this.genre} file directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
	}
}

const Spiderman2 = new Movie('Spiderman', 'Sam Raimi', 'Action', 2002, 87);
const Batman1 = new Movie(
	'The Dark Knight',
	'Christopher Nolan',
	'Action',
	2008,
	83
);

console.log(Spiderman2);
console.log(Spiderman2.getOverview());
console.log(Batman1.getOverview());
