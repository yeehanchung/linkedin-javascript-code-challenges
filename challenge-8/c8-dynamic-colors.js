function changeColor(color) {
	/**
	 * Closure to set the body's background
	 * color to a particular value.
	 */
	return function () {
		document.body.style.background = color;
	};
}

const bgColorBlue = changeColor('#0f62fe');
const bgColorPink = changeColor('#ff7eb6');
const bgColorGreen = changeColor('#42be65');

// 3 eventListeners
document.querySelector('#blue').addEventListener('click', bgColorBlue);
document.querySelector('#pink').addEventListener('click', bgColorPink);
document.querySelector('#green').addEventListener('click', bgColorGreen);
