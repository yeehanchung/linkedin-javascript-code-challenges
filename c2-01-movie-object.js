// Solution 1:

function Movie(title, director, genre, releaseYear, rating) {
	this.title = title;
	this.director = director;
	this.genre = genre;
	this.releaseYear = releaseYear;
	this.rating = rating;
}

Movie.prototype.getOverview = function () {
	return `${this.title}, a ${this.genre} file directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
};

/**
 * Declare the function so each instance
 * doesn't create a new function.
 * So that each new copy or instance of the movie
 * object doesn't recreate the function.
 */

const Spiderman = new Movie('Spiderman', 'Sam Raimi', 'Action', 2002, 87);
const Batman = new Movie(
	'The Dark Knight',
	'Christopher Nolan',
	'Action',
	2008,
	83
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
