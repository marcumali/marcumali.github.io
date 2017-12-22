var visibility = {};

( function($){

	var classes = 'gradient-overflow content-text';

	visibility.init = function(){

		visibility.more();
		visibility.less();

	};

	visibility.more = function(){

		$( '.js-reveal' ).on( 'click keydown', function(){

			keydownClick();

			var content = $( this ).parents( '.profile-content' ).find( '.content-list' ).outerHeight();

			$( this ).parents( '.profile-content' ).find( '.profile-content-text' ).css({ 'height': content }).removeClass( classes );
			$( this ).parents( '.profile-content' ).find( '.js-unreveal' ).fadeIn( 100 ).removeClass( 'hidden' );
			$( this ).fadeOut( 100 );

		});
	};

	visibility.less = function(){

		$( '.js-unreveal' ).on( 'click keydown', function(){

			keydownClick();

			$( this ).parents( '.profile-content' ).find( '.profile-content-text' ).addClass( classes ).removeAttr( 'style' );
			$( this ).parents( '.profile-content' ).find( '.js-reveal' ).fadeIn( 100 ).removeClass( 'hidden' );
			$( this ).fadeOut( 100 );
		});

	};

	$( document ).ready( function(){

		visibility.init();

	});

}) (jQuery);
