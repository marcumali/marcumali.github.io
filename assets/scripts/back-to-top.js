var backToTopJS = {};

( function( $ ){

    var $container = $( '.js-back-to-top' );

    backToTopJS.Animate = function(){
		$container.on( 'click', function () {
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 800);
		});
    };

    if ( $container.length > 0 ) {
        backToTopJS.Animate();
    }

}) (jQuery);
