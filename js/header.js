// Hamburger Menu Toogle
const hamburgerContainer = document.querySelector('.header__hamburger-container');
const nav = document.querySelector('.header__nav');

hamburgerContainer.addEventListener('click', () => {
	hamburgerContainer.classList.toggle('active');
	nav.classList.toggle('active');
});

// Active link Style
document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('.header__link a');
	const currentPath = window.location.pathname.replace('<?= ROOT ?>', '').toLowerCase();

	links.forEach(link => {
		const linkPath = new URL(link.href).pathname.replace('<?= ROOT ?>', '').toLowerCase();

		// Check if the current path matches the link path
		if ((currentPath === '/' && linkPath === '/') || (currentPath !== '/' && currentPath.includes(linkPath) && linkPath !== '/')) {
			link.classList.add('active');
		}
	});
});
