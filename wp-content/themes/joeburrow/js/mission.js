"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

const boxesIntersectionObserver = new IntersectionObserver( function( entries ) {
	entries.forEach( ( entry ) => {
		if ( entry.intersectionRatio > 0 ) {
			setTop( entry.target );

			$( window ).on( "scroll", function() {
				setTop( entry.target );
			} );
		}
	} );
} );

const boxObjects = document.querySelectorAll( ".page-template-mission #middle_content_c div.middle_content_c div.image_c div.box" );

boxObjects.forEach( ( o ) => {
	o.dataset.top = parseInt( window.getComputedStyle( o ).getPropertyValue( "top" ) ).toString();
	setTop( o );
	boxesIntersectionObserver.observe( o );
} );

function setTop( el ) {
	let top = $( el ).data( "top" );
	let offsetTop = parseInt( $( el ).offset().top );
	let windowScrollY = window.scrollY;
	let windowInnerHeight = window.innerHeight;

	let _top = Math.floor( top - ( windowInnerHeight * 0.08 ) - ((offsetTop - windowInnerHeight - windowScrollY) * 0.15) );

	el.style.top = _top + "px";
}
