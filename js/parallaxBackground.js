window.addEventListener('scroll', () => {
	document.querySelectorAll('[data-parallax]').forEach(container => {
		const background = container.querySelector('[data-parallax-background]');
		if (!background) return;

		const scrollY = window.scrollY;
		const containerTop = container.offsetTop;
		const containerHeight = container.offsetHeight;
		const speed = parseFloat(container.dataset.speed) || 30;

		const inView = scrollY + window.innerHeight >= containerTop && scrollY <= containerTop + containerHeight;

		if (inView) {
			const scrollProgress = (scrollY - containerTop) / containerHeight;
			background.style.transform = `translateY(${scrollProgress * speed}px)`;
		}
	});
});
