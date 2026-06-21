"use strict";

let loading_posts = false;

$( function() {
	$( ".blog #content_c #load_more_cta" ).on( "click touchend", function() {
		if ( loading_posts ) {
			return false;
		}
	
		loading_posts = true;
		$( ".blog #content_c #load_more_cta" ).html( '<span><i class="fad fa-spinner-third fa-spin"></i> Loading ...</span> ' );

		const postsPerPage = 6;
		const postNumber = $( ".blog #featured_c div.post" ).length + $( ".blog #content_c div.posts_c a.post" ).length;
		const category = "";
		const search = "";

		$.ajax( {
			'type': 'POST', 'url': jbAjaxLocalization.ajaxurl, 'data': {
				'postsPerPage': postsPerPage, 'postOffset': postNumber, 'category': category, 'search': search, 'nonce': $( "#_wpnonce" ).val(), 'action': jbAjaxLocalization.action
			}
		} ).done( function( response ) {
			$.each( response.data, function( i, post ) {
				let $post = $( '<a href="' + post.permalink + '" target="' + post.target + '" class="post" data-id="' + post.id + '"><span class="image"></span><span class="categories">' + post.categories + '</span><span class="title">' + post.headline + '</span><span class="cta">' + post.button_text + ' <i class="fa-light fa-arrow-right-long"></i></span></a>' );

				$post.find( "span.image" ).css( "background-image", "url('" + post.image + "')" );

				$( ".blog #content_c div.posts_c" ).append( $post );
			} );

			if ( response.data.length < postsPerPage ) {
				$( ".blog #content_c #load_more_cta" ).remove();
			} else {
				$( ".blog #content_c #load_more_cta" ).html( '<span>Load More <i class="fa-sharp fa-solid fa-plus"></i></span>' );
			}

			loading_posts = false;
		} ).fail( function( error ) {
			console.log(error);
		} );
	} );
} );
