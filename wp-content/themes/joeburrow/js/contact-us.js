"use strict";

$( function() {
	let anchor = $( location ).attr( "hash" );

	if ( anchor === "#form_c" ) {
		let form_c_offset_top = $( anchor ).offset().top;

		setTimeout( function() {
			window.scrollTo( {
				top: form_c_offset_top - 120, left: 0, behavior: "auto"
			} );
		}, 250 );
	}
} );

