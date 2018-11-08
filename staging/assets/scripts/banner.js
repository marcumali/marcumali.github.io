var bannerJS = {};

( function( $ ){

    $container = $( '.section-banner' );

    bannerJS.Scale = function(){
        if ( Viewport.documentWidth().width <= 991 ) {
            $container.css({ 'height': $container.find( '.display-table' ).outerHeight() });
        }else{
            $container.removeAttr( 'style' );
        }
    };

    $( window ).on({
        load: function(){
            bannerJS.Scale();
        },
        resize: function(){
            bannerJS.Scale();
        }
    });

}) ( jQuery );
