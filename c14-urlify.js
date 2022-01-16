function urlify(blogTitle) {
	/**
	 * 2 alternatives
	 */
	const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
	// const punctuation = new RegExp("regex");

	// Remove punctuation
	const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, '');

	/**
	 * 2 alternatives
	 * - replaceAll() doesn't work with current node version at the moment.
	 * - https://regexr.com/3bvel
	 */
	return blogTitleWithoutPunctuation
		.toLowerCase()
		.trim()
		.replace(/(\s)/g, '-');

	// return blogTitleWithoutPunctuation
	// 	.toLowerCase()
	// 	.trim()
	// 	.split(' ')
	// 	.join('-');
}

console.log(urlify('How I Got Into Programming!'));
console.log(urlify("I've got a new job :)"));
