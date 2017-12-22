var sectionJS = {};

( function($){

	var i = 1;
	var ia = i;

	sectionJS.Init = function(){

		sectionJS.Smoothscroll();

	};

	sectionJS.Smoothscroll = function(){

		$( '.navbar-nav .icon-action' ).each( function(){

			$( this ).attr( 'href', '#js-item-' + i );
			if ( i === 2 ) {
				$( '.section-banner .icon-action' ).attr( 'href', '#js-item-2' );
			}
			i++;

		});

		$( '.section' ).each( function(){

			$( this ).attr( 'id', 'js-item-' + ia );
			ia++;

		});

		$( 'a[href*=\\#]:not( [href=\\#] )' ).on( 'click keydown', function() {

			keydownClick();

			if ( location.pathname.replace( /^\//,'' ) === this.pathname.replace( /^\//,'' ) && location.hostname === this.hostname ) {

				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice(1) +']' );

				if ( target.length ) {
					$( 'html,body' ).stop().animate({
					scrollTop: target.offset().top
				}, 1000);
					return false;
				}

			}

	    });

	};

	$( document ).ready( function(){

		sectionJS.Init();

	});

}) ( jQuery );
