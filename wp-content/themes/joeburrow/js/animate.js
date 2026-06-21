"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

const animateIntersectionObserver = new IntersectionObserver( function( entries ) {
	entries.forEach( ( entry ) => {
		if ( entry.intersectionRatio > 0 ) {
			let animateClass = "animate__" + entries[0].target.dataset.animate;

			if ( !entry.target.classList.contains( animateClass ) ) {
				entry.target.classList.add( "animate__" + entries[0].target.dataset.animate );
			}
		}
	} );
} );

const animatedObjects = document.querySelectorAll( ".animate__animated" );

animatedObjects.forEach( ( o ) => {
	animateIntersectionObserver.observe( o );
} );
