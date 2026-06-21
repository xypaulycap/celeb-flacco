"use strict";

$( function() {
	$( ".page-template-leadership #board_of_directors_c div.board_of_directors_c div.advisors_c div.advisor div.name_title_c div.read_more_cta" ).on( "keyup click", function( e ) {
		if ( e.type === "click" || e.which === 13 ) {
			let $bio = $( this.previousElementSibling );

			if ( !$bio.is( ":visible" ) ) {
				$( this ).html( 'Less <i class="fa-regular fa-minus"></i>' );
			} else {
				$( this ).html( 'Read More <i class="fa-regular fa-plus"></i>' );
			}

			$bio.slideToggle();
		}
	} );

	if ( !is_1024 ) {
		$( ".page-template-leadership #board_of_directors_c div.board_of_directors_c div.advisors_c div.advisor" ).eq( 0 ).find( "div.name_title_c div.read_more_cta" ).trigger( "click" );
	}
} );
