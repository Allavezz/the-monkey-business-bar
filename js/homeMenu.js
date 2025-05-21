const navButtons = document.querySelectorAll('.home-menu__li');
const menuItems = document.querySelectorAll('.home-menu__item');

function showCategory(category) {
	navButtons.forEach(btn => {
		btn.classList.toggle('active', btn.dataset.category === category);
	});

	menuItems.forEach(item => {
		item.classList.toggle('visible', item.dataset.category == category);
	});
}

showCategory('cocktails');

navButtons.forEach(button => {
	button.addEventListener('click', () => {
		const category = button.dataset.category;
		showCategory(category);
	});
});
