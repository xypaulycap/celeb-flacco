"use strict";

$( function() {
	$( ".page-template-y4y-application #information_and_faqs_c div.information_and_faq_c div.header" ).on( "keyup click", function( e ) {
		if ( e.type === "click" || e.which === 13 ) {
			let $parent = $( this ).parent();

			$parent.toggleClass( "open" );
			$parent.find( "div.copy" ).eq( 0 ).slideToggle();
		}
	} );

	setTimeout( function() {
		$( ".page-template-y4y-application #information_and_faqs_c div.information_and_faq_c" ).eq( 0 ).find( "div.header" ).eq( 0 ).trigger( "click" );
	}, 500 );
} );
