/**
 * Functions that can be exited and at a later
 * point in time, reentered while maintaining
 * their context.
 * E.g. Solve problems with asynchronous programming
 *
 * Been replaced with JS async await.
 */

function* getStop() {
	yield 'Poughkeepsie';
	yield 'Newburgh';
	yield 'Peekskill';
	yield 'Yonkers';
	yield 'Bronx';
	yield 'Grand Central';
}

const nycTrainLine = getStop();
const nextStopButton = document.querySelector('#next-stop');

nextStopButton.addEventListener('click', () => {
	/**
	 * Get the current stop
	 */
	let currStop = nycTrainLine.next();
	if (currStop.done) {
		console.log('We made it!');
		nextStopButton.setAttribute('disabled', true);
	} else {
		console.log(currStop);
	}
});
