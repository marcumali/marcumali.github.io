function animateIn( classEach, value, elementClass ){

	var animate = classEach;
	var time = value;
	var eClass = elementClass;

	animate.each( function( i ) {
		var element = $( this );
		setTimeout( function(){
			element.addClass( eClass );
		}, i*+time );
	});

}

var Viewport = {};
Viewport.documentWidth = function(){
    var e = window, a = 'inner';
    if ( !( 'innerWidth' in window ) ) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width : e[ a+'Width' ],
        height : e[ a+'Height' ]
    };
};

var e = {};
var etype = e.type;

function keydownClick(){

    if( etype === 'keydown' && (e.keyCode !== 13 || e.keyCode !== 32) ) {
         return true;
    }

}

(function($) {

    var Dwh = {
        'common': {
            init: function() {

				$body = $( 'body' );

				function deviceJS(){
					if ( Viewport.documentWidth().width > 768 ) {
						$body.addClass( 'js-desktop' );
						$body.removeClass( 'js-mobile' );
					}else{
						$body.addClass( 'js-mobile' );
						$body.removeClass( 'js-desktop' );
					}
				}

				deviceJS();

				$( window ).on({
					resize: function(){
						deviceJS();
					}
				});

            },
            finalize: function() {

            }
        },
    };

var UTIL = {
    fire: function( func, funcname, args ) {
        var fire;
        var namespace = Dwh;
        funcname = ( funcname === undefined ) ? 'init' : funcname;
        fire = func !== '';
        fire = fire && namespace[func];
        fire = fire && typeof namespace[func][funcname] === 'function';

    if ( fire ) {
        namespace[func][funcname](args);
    }
},
    loadEvents: function() {

    UTIL.fire( 'common' );

        $.each( document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
            UTIL.fire( classnm );
            UTIL.fire( classnm, 'finalize' );
        } );

        UTIL.fire( 'common', 'finalize' );
    }
};

  $( document ).ready( UTIL.loadEvents );

})(jQuery);
