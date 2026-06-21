"use strict";

let content_offset = 0;
let page_width = 0;
let is_1024 = false;

// https://github.com/callmenick/Animating-Hamburger-Icons
(function() {
	const hamburgers = document.querySelectorAll( ".c-hamburger" );

	hamburgers.forEach( ( hamburger ) => {
		hamburger.addEventListener( "click", ( event ) => {
			event.preventDefault();

			if ( hamburger.classList.contains( "is-active" ) === true ) {
				hamburger.classList.remove( "is-active" );
				document.querySelector( "div.site" ).classList.remove( "open" );
				window.scrollTo( {
					top: content_offset, left: 0, behavior: "auto"
				} );
			} else {
				content_offset = document.documentElement.scrollTop;
				hamburger.classList.add( "is-active" );
				document.querySelector( "div.site" ).classList.add( "open" );
			}
		} );
	} );

	const navLinks = document.querySelectorAll( "header #menu_c nav ul li a" );

	navLinks.forEach( ( link ) => {
		link.addEventListener( "click", ( event ) => {
			if ( link.parentElement.classList.contains( "anchor" ) ) {
				if ( window.location.pathname === "/" ) {
					try {
						let link_href = link.getAttribute( "href" ).split( "#" );
						let element = document.querySelectorAll( "#" + link_href[1] );
						let timeout = 0;

						if ( window.innerWidth < 1024 ) {
							hamburgers[0].click();
							timeout = 300;
						}

						setTimeout( function() {
							window.scrollTo( {
								top: element[0].offsetTop - 100, left: 0, behavior: "smooth"
							} );
						}, timeout );

						event.preventDefault();
					} catch ( e ) {
						// invalid querySelector, likely a real URL
					}
				}
			} else if ( link.parentElement.classList.contains( "none" ) && !link.parentElement.classList.contains( "menu-item-has-children" ) ) {
				event.preventDefault();
			} else if ( link.parentElement.classList.contains( "none" ) && link.parentElement.classList.contains( "menu-item-has-children" ) ) {
				event.preventDefault();
				handleDropDownMenus( link, event );
			} else if ( !link.parentElement.classList.contains( "none" ) && link.parentElement.classList.contains( "menu-item-has-children" ) ) {
				if ( !is_1024 ) {
					event.preventDefault();
				}

				handleDropDownMenus( link, event );
			}
		} );

		link.addEventListener( "keyup", ( event ) => {
			event.preventDefault();

			if ( link.parentElement.classList.contains( "menu-item-has-children" ) ) {
				handleDropDownMenus( link, event );
			}
		} );
	} );
})();

function handleDropDownMenus( link, e ) {
	if ( !is_1024 ) {
		let $this = $( link );
		let $sibling = $this.siblings( "ul.sub-menu" );
		let $parent = $this.parent();

		$( "header #menu_c nav > ul > li.menu-item-has-children ul.sub-menu" ).slideUp();
		$( "header #menu_c nav > ul > li.menu-item-has-children.open" ).not( $parent ).removeClass( "open" );

		if ( $this.parent().hasClass( "open" ) ) {
			$this.parent().removeClass( "open" );
			$sibling.slideUp();
		} else {
			$this.parent().addClass( "open" );
			$sibling.slideDown();
		}
	} else {
		if ( e.which === 13 ) {
			let $this = $( link );
			let $sibling = $this.siblings( "ul.sub-menu" );

			$this.parent().toggleClass( "open" );
			$sibling.toggle();
		}
	}
}

$( function() {
	page_width = $( window ).width();
	is_1024 = page_width >= 1024;

	$( window ).on( "resize", function() {
		page_width = $( window ).width();
		is_1024 = page_width >= 1024;

		if ( page_width >= 960 && $( ".site" ).hasClass( "open" ) ) {
			$( ".c-hamburger" ).trigger( "click" );
		}
	} );

	$( "header #menu_c nav" ).hoverIntent( {
		over: navOver,
		out: navOut,
		selector: '> ul > li.menu-item-has-children',
		timeout: 250
	} );

	$( "header #menu_c nav > ul" ).on( "> li.menu-item-has-children", "focusin", navOver ).on( "> li.menu-item-has-children", "focusout", navOut );

	function navOver() {
		if ( page_width >= 1024 ) {
			let $this = $( this ).find( "> a" );
			let $sibling = $this.siblings( "ul.sub-menu" );

			$this.parent().addClass( "open" );
			$sibling.show();
		}
	}

	function navOut() {
		if ( page_width >= 1024 ) {
			let $this = $( this ).find( "> a" );
			let $sibling = $this.siblings( "ul.sub-menu" );

			$this.parent().removeClass( "open" );
			$sibling.hide();
		}
	}

} );

// Newsletter form — show "Thank you" success text after 2s (no email sent)
document.addEventListener("DOMContentLoaded", function () {
	var newsletterForm = document.querySelector("#gform_2");
	if (!newsletterForm) return;
	newsletterForm.addEventListener("submit", function (e) {
		e.preventDefault();
		var wrapper = document.querySelector("#gform_wrapper_2");
		var submitBtn = newsletterForm.querySelector("button[type='submit']");
		var emailInput = newsletterForm.querySelector("input[type='email']");
		if (submitBtn) submitBtn.disabled = true;

		setTimeout(function () {
			var existing = document.querySelector("#newsletter_success_msg");
			if (existing) existing.remove();

			var msg = document.createElement("p");
			msg.id = "newsletter_success_msg";
			msg.textContent = "\u2713 Thank you for subscribing!";
			msg.style.cssText = "color:#34d399;font-weight:600;font-size:0.95rem;margin-bottom:8px;transition:opacity 0.6s ease;";
			if (wrapper) wrapper.parentNode.insertBefore(msg, wrapper);

			if (emailInput) emailInput.value = "";
			if (submitBtn) submitBtn.disabled = false;

			setTimeout(function () {
				msg.style.opacity = "0";
				setTimeout(function () { if (msg.parentNode) msg.remove(); }, 700);
			}, 4000);
		}, 2000);
	});
});
