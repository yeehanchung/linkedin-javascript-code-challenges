function vegetarianMenu(menu) {
	const menuNode = document.querySelector('#menu');
	/**
	 * Return a new set of array
	 * which met the condition set.
	 */
	const vegetarianOptions = menu.filter(
		(option) => option.isVegetarian === true
	);

	vegetarianOptions.forEach((option) => {
		let dish = document.createElement('li');
		dish.textContent = option.name;
		menuNode.appendChild(dish);
	});
}

const menu = [
	{
		name: 'Eggplant Parmesan',
		isVegetarian: true,
	},
	{
		name: 'Spaghetti & Meatballs',
		isVegetarian: false,
	},
	{
		name: 'Tiramisu',
		isVegetarian: true,
	},
	{
		name: 'McD',
		isVegetarian: false,
	},
	{
		name: 'Salad',
		isVegetarian: true,
	},
];

vegetarianMenu(menu);
