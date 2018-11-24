var browserFnc = {};

( function( $ ){

    browserFnc.Catch = function(){

        var ua = window.navigator.userAgent;
        var body = $( 'body' );

        if ( /MSIE (\d+\.\d+);/.test( navigator.userAgent ) || navigator.userAgent.indexOf( 'Trident/' ) > -1 || ua.indexOf( 'Edge/' ) > 0 ){
            body.addClass( 'is-browser-ie' );
        }

        if ( body.hasClass( 'is-browser-ie' ) ) {
            $( '.js-parallax' ).each( function(){
                $( '.js-parallax' ).removeClass( 'js-parallax parallax-background' ).addClass( 'disabled-parallax' );
            });
        }

    };

    browserFnc.Catch();

}) ( jQuery );
