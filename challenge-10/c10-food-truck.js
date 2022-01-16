/**
 * Sets are a primitive JavaScript type
 * that allows us to create a unique set of items.
 * E.g. dataset contains repeating values,
 * and we want to remove duplicate instances.
 */
function foodTruckFestival(menus) {
	let flatMenus = menus.flat();

	let combinedMenu = new Set();
	flatMenus.forEach((menu) => {
		combinedMenu.add(menu);
	});

	const menuNode = document.querySelector('#combined-menu');
	for (let item of combinedMenu) {
		let foodNode = document.createElement('li');
		foodNode.innerText = item;
		menuNode.appendChild(foodNode);
	}
}

foodTruckFestival([['Tacos', 'Burger'], ['Pizza'], ['Burgers', 'Fries']]);
