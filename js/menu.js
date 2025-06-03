const sections = document.querySelectorAll('.menu-section');
const navLinks = document.querySelectorAll('.menu-nav__link');

navLinks[0].classList.add('active');

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				navLinks.forEach(link => {
					const isActive = link.getAttribute('href') === `#${entry.target.id}`;
					link.classList.toggle('active', isActive);

					if (isActive) {
						link.scrollIntoView({
							behavior: 'smooth',
							inline: 'center',
							block: 'nearest',
						});
					}
				});
			}
		});
	},
	{
		threshold: 0.1,
	},
);

sections.forEach(section => observer.observe(section));
