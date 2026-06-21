"use strict";

window.addEventListener( "load", function() {
	const searchParams = new URLSearchParams( window.location.search );

	if ( searchParams.get( "df9id" ) ) {
		const form_offset_top = document.getElementById( "gform_wrapper_7" ).offsetTop;

		setTimeout( function() {
			window.scrollTo( {
				top: form_offset_top - 100, left: 0, behavior: "smooth"
			} );
		}, 250 );
	}
} );

$( function() {


	$( ".page-template-df9-application #information_and_faqs_c div.information_and_faq_c div.header" ).on( "keyup click", function( e ) {
		if ( e.type === "click" || e.which === 13 ) {
			let $parent = $( this ).parent();

			$parent.toggleClass( "open" );
			$parent.find( "div.copy" ).eq( 0 ).slideToggle();
		}
	} );

	setTimeout( function() {
		$( ".page-template-df9-application #information_and_faqs_c div.information_and_faq_c" ).eq( 0 ).find( "div.header" ).eq( 0 ).trigger( "click" );
	}, 500 );
} );
