/* global Swiper */
"use strict";

window.addEventListener( "DOMContentLoaded", function() {
	// https://jshakespeare.com/simple-count-up-number-animation-javascript-react/

	// How long you want the animation to take, in ms
	const animationDuration = 5000;
	// Calculate how long each ‘frame’ should last if we want to update the animation 30 times per second
	const frameDuration = 1000 / 3;
	// Use that to calculate how many frames we need to complete the animation
	const totalFrames = Math.round( animationDuration / frameDuration );
	// An ease-out function that slows the count as it progresses
	const easeOutQuad = t => t * (2 - t);

	// The animation function, which takes an Element
	const animateCountUp = el => {
		let frame = 0;
		const countTo = parseInt( el.dataset.total, 10 );
		// Start the animation running 60 times per second
		const counter = setInterval( () => {
			frame++;
			// Calculate our progress as a value between 0 and 1
			// Pass that value to our easing function to get our
			// progress on a curve
			const progress = easeOutQuad( frame / totalFrames );
			// Use the progress value to calculate the current count
			const currentCount = Math.round( countTo * progress );

			// If the current count has changed, update the element
			if ( parseInt( el.dataset.total, 10 ) !== currentCount ) {
				el.innerHTML = "$" + currentCount.toLocaleString(); // tweak to add commas
			}

			// If we’ve reached our last frame, stop the animation
			if ( frame === totalFrames ) {
				el.innerHTML = "$" + countTo.toLocaleString();
				clearInterval( counter );
			}
		}, frameDuration );
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

	const intersectionObserver = new IntersectionObserver( function( entries ) {
		entries.forEach( ( entry ) => {
			if ( entry.intersectionRatio > 0 && !isNaN( parseInt( entry.target.innerHTML.replace( "$", "" ).replace( ",", "" ) ) ) ) {
				animateCountUp( entry.target );
			}
		} );
	} );

	const amount = document.querySelector( ".single-annual_reports #impact_spotlights_c div.top div.right div.amount" );

	if ( amount !== null ) {
		intersectionObserver.observe( amount );
	}
} );

window.addEventListener( "load", function() {
	if ( window.location.hash !== "" ) {
		const anchor = document.querySelector( "section[data-id='" + window.location.hash.replace( "#", "" ) + "']" );

		if ( anchor !== null ) {
			window.scrollTo( {
				behavior: 'smooth',
				left: 0,
				top: anchor.getBoundingClientRect().top + window.scrollY - 100
			} );
		}
	}

	document.querySelectorAll( ".single-annual_reports #anchors_c div.anchors_c a" ).forEach( function( a ) {
		a.addEventListener( "click", function( e ) {
			e.preventDefault();

			const anchor = document.querySelector( "section[data-id='" + a.getAttribute( "href" ).replace( "#", "" ) + "']" );

			if ( anchor !== null ) {
				window.scrollTo( {
					behavior: 'smooth',
					left: 0,
					top: anchor.getBoundingClientRect().top + window.scrollY - 100
				} );
			}
		} )
	} );

	const imageCarouselContainer = document.getElementById( "mission_c" );

	if ( imageCarouselContainer !== null ) {
		new Swiper( ".single-annual_reports #mission_c div.images_c div.swiper", {
			keyboard: {
				enabled: true
			}, navigation: {
				nextEl: ".single-annual_reports #mission_c div.images_c .swiper-button-next",
				prevEl: ".single-annual_reports #mission_c div.images_c .swiper-button-prev"
			}, pagination: {
				el: ".single-annual_reports #mission_c div.images_c .swiper-pagination",
			}, breakpoints: {
				320: {
					slidesPerView: 1, spaceBetween: 20
				}, 768: {
					slidesPerView: 5, spaceBetween: 30
				}, 1024: {
					slidesPerView: 5, spaceBetween: 40
				}
			},
			centerInsufficientSlides: true,
		} );
	}

	const foodInsecurityImageCarouselContainer = document.getElementById( "food_insecurity_c" );

	if ( foodInsecurityImageCarouselContainer !== null ) {
		new Swiper( ".single-annual_reports #food_insecurity_c div.images_c div.swiper", {
			keyboard: {
				enabled: true
			}, navigation: {
				nextEl: ".single-annual_reports #food_insecurity_c div.images_c .swiper-button-next",
				prevEl: ".single-annual_reports #food_insecurity_c div.images_c .swiper-button-prev"
			}, pagination: {
				el: ".single-annual_reports #food_insecurity_c div.images_c .swiper-pagination",
			}, breakpoints: {
				320: {
					slidesPerView: 1, spaceBetween: 20
				}, 768: {
					slidesPerView: 5, spaceBetween: 30
				}, 1024: {
					slidesPerView: 5, spaceBetween: 40
				}
			},
			centerInsufficientSlides: true,
		} );
	}

	const programSpotlightsImageCarouselContainer = document.getElementById( "program_spotlights_c" );

	if ( programSpotlightsImageCarouselContainer !== null ) {
		new Swiper( ".single-annual_reports #program_spotlights_c div.images_c div.swiper", {
			keyboard: {
				enabled: true
			}, navigation: {
				nextEl: ".single-annual_reports #program_spotlights_c div.images_c .swiper-button-next",
				prevEl: ".single-annual_reports #program_spotlights_c div.images_c .swiper-button-prev"
			}, pagination: {
				el: ".single-annual_reports #program_spotlights_c div.images_c .swiper-pagination",
			}, breakpoints: {
				320: {
					slidesPerView: 1, spaceBetween: 20
				}, 768: {
					slidesPerView: 5, spaceBetween: 30
				}, 1024: {
					slidesPerView: 5, spaceBetween: 40
				}
			},
			centerInsufficientSlides: true,
		} );
	}

	const testimonialContainers = document.querySelectorAll( "div.testimonials_c" );

	testimonialContainers.forEach( function( t ) {
		new Swiper( t.querySelector( "div.swiper" ), {
			keyboard: {
				enabled: true
			}, navigation: {
				nextEl: t.querySelector( ".swiper-button-next" ),
				prevEl: t.querySelector( ".swiper-button-prev" )
			}, pagination: {
				el: t.querySelector( ".swiper-pagination" ),
			}
		} );
	} );
} );

