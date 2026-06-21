"use strict";

(function() {
	Fancybox.bind( "[data-fancybox]", {} );

	new Swiper( ".home #header_carousel_c div.swiper", {
		autoplay: {
			delay: 7500,
			disableOnInteraction: false,
			waitForTransition: false
		},
		effect: "fade",
		loop: true,
		on: {
			init: function (swiper) {
				swiper.slides[swiper.activeIndex].classList.add("burn");
			},
			slideChangeTransitionEnd: function( swiper ) {
				document.querySelectorAll( ".home #header_carousel_c div.swiper-slide:not(.swiper-slide-fully-visible)" ).forEach( ( slide ) => {
					slide.classList.remove( "burn" );
				} );
			},
			slideChangeTransitionStart: function( swiper ) {
				swiper.slides[swiper.activeIndex].classList.add( "burn" );
			}
		},
		navigation: {
			nextEl: '#header_carousel_c .swiper-button-next',
			prevEl: '#header_carousel_c .swiper-button-prev'
		},
		pagination: {
			clickable: true,
			el: "#header_carousel_c .swiper-pagination"
		},
		speed: 750
	} );
})();
