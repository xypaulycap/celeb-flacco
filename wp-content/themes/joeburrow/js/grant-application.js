"use strict";

$( function() {
	$( ".page-template-grant-application #information_and_faqs_c div.information_and_faq_c div.header" ).on( "keyup click", function( e ) {
		if ( e.type === "click" || e.which === 13 ) {
			let $parent = $( this ).parent();

			$parent.toggleClass( "open" );
			$parent.find( "div.copy" ).eq( 0 ).slideToggle();
		}
	} );

	setTimeout( function() {
		$( ".page-template-grant-application #information_and_faqs_c div.information_and_faq_c" ).eq( 0 ).find( "div.header" ).eq( 0 ).trigger( "click" );
	}, 500 );

	$( document ).on( "keyup blur focus", ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.choice input", function( e ) {
		let total = 0;
		let data = [];

		if ( e.type === "blur" || e.type === "focusout" ) {
			let _val = $( this ).val();

			if ( _val < 0 ) {
				$( this ).val( 0 );
			} else {
				$( this ).val( Math.round( $( this ).val() ) );
			}
		}

		$( ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.choice input" ).each( function( index ) {
			const v = Math.round( $( this ).val() );

			if ( !isNaN( v ) ) {
				total += v
				data.push( $( this ).prop( "name" ) + ":" + v );
			}
		} );

		if ( total >= 100 ) {
			$( ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.choice input" ).each( function( index ) {
				const v = parseInt( $( this ).val() );

				if ( isNaN( v ) ) {
					$( this ).prop( "disabled", true );
				} else {
					$( this ).prop( "disabled", false );
				}
			} );
		} else {
			$( ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.choice input" ).each( function( index ) {
				$( this ).prop( "disabled", false );
			} );
		}

		$( ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.total input" ).val( total + "%" );
		$( "#input_5_56" ).val( data.join( ";" ) );
	} );

	$( document ).on( 'gform_page_loaded', function( event, form_id, current_page ) {
		let $input_5_56 = $( "#input_5_56" );

		if ( form_id === 5 && parseInt( current_page ) === 4 ) {
			let v = $input_5_56.val();

			if ( v !== "" ) {
				let choices = v.split( ";" );

				$.each( choices, function( index, choice ) {
					let field_value = choice.split( ":" );

					$( "input[name='" + field_value[0] + "']" ).val( field_value[1] );
				} );

				setTimeout( function() {
					$( ".page-template-grant-application #form_c #race_demographics_c div.choices_c div.choice:first-child input" ).trigger( "focus" );
				}, 500 );
			}

			if ( $input_5_56.attr( "aria-invalid" ) === "true" ) {
				$( "#field_5_55" ).addClass( "gfield_error" ).append( '<div id="validation_message_5_55" class="gfield_description validation_message gfield_validation_message">The Total above must equal 100%.</div>' );
			}
		} else if ( form_id === 5 && parseInt( current_page ) === 5 ) {
			// this is maddening ....
			setTimeout( function() {
				$( ".page-template-grant-application #form_c #field_5_53 input[name='input_53[]']" ).attr( "maxlength", "275" );
			}, 500 );

			gform.addAction( 'gform_list_post_item_add', function ( item, container ) {
				item[0].querySelector( "input[name='input_53[]']" ).setAttribute( "maxlength", "275" )
			} );
		}
	} );
} );
