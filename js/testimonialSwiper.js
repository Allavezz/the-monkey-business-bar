const testimonialSwiper = new Swiper('.home-testimonials__swiper', {
	loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1060: {
			slidesPerView: 3,
		},
	},
});
