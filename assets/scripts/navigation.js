var navJS = {};

( function( $ ){

    $target = $( '.js-navigation' );
    $body = $( 'body' );

    navJS.Nav = function(){
        $target.on( 'click', function(){
            if ( !$body.hasClass( 'is-nav-open' ) ) {
                $body.addClass( 'is-nav-open' );
            }else{
                $body.removeClass( 'is-nav-open' );
            }
        });
    };

    if ( $target.length > 0 ) {
        navJS.Nav();
    }

}) (jQuery);
