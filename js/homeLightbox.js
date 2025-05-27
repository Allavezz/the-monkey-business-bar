const images = document.querySelectorAll('.home-studio__image');
const lightbox = document.getElementById('home-lightbox');
const lightboxImage = document.querySelector('.home-lightbox__image');
const lightboxTitle = document.querySelector('.home-lightbox__title');
const lightboxClose = document.querySelector('.home-lightbox__close');

let currentIndex = 0;

function openLightbox(index) {
	currentIndex = index;
	updateLightbox();
	lightbox.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	lightbox.classList.remove('active');
	document.body.style.overflow = '';
}

function updateLightbox() {
	lightboxImage.src = images[currentIndex].src;
}

function nextImage() {
	currentIndex = (currentIndex + 1) % images.length;
	updateLightbox();
}

function prevImage() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	updateLightbox();
}

// Close lightbox when clicking outside of the image or on the close span
lightbox.addEventListener('click', event => {
	if (event.target === lightbox) {
		closeLightbox();
	} else if (event.target === lightboxClose) {
		closeLightbox();
	}
});

// Keyboard navigation
document.addEventListener('keydown', event => {
	if (!lightbox.classList.contains('active')) return;

	if (event.key === 'ArrowRight') nextImage();
	if (event.key === 'ArrowLeft') prevImage();
	if (event.key === 'Escape') closeLightbox();
});

// Swipe

let startX = 0;
let endX = 0;

lightboxImage.addEventListener('touchstart', event => {
	startX = event.touches[0].clientX;
});

lightboxImage.addEventListener('touchend', event => {
	endX = event.changedTouches[0].clientX;
	handleSwipe();
});

function handleSwipe() {
	const swipeDistance = endX - startX;
	const swipeThreshold = 50;

	if (swipeDistance > swipeThreshold) {
		prevImage();
	} else if (swipeDistance < -swipeThreshold) {
		nextImage();
	}
}

// Add click event to open lightbox
images.forEach((image, index) => {
	image.addEventListener('click', () => openLightbox(index));
});
