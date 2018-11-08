var revealJS = {};

( function( $ ){

    $button = $( '.js-show-more' );
    $open = $button.data( 'open-text' );
    $loadmore = $( '.card-footer' );
    $item = $( '.card-item' );
    $body = $( 'body' );

    revealJS.Fadein = function( e ){

        $button.on( 'click', function(e){
            e.stopPropagation();

            var _this = $( this );
            var casing = _this.parents( '.card-casing' );
            var item = _this.parents( '.card-item' );
            var content = item.find( '.card-content' );

            if( _this.attr( 'data-click-state' ) === '1' ) {
                $button.attr( 'data-click-state', '1' );
                $button.text( $open );
                $item.removeClass( 'is-active' );
                casing.addClass( 'is-open' );
            } else {
                casing.removeClass( 'is-open' );
            }

            if ( Viewport.documentWidth().width > 768 ) {
                if ( $body.hasClass( 'js-desktop' ) ) {
                    if( _this.attr( 'data-click-state' ) === '1' ) {
                        $( '.card-content' ).stop().fadeOut();
                        content.stop().fadeIn();
                    } else {
                        content.stop().fadeOut();
                    }
                }
            }else{
                if ( $body.hasClass( 'js-mobile' ) ) {
                    if( _this.attr( 'data-click-state' ) === '1' ) {
                        $( '.card-content' ).stop().slideUp();
                        content.stop().slideDown();
                    } else {
                        content.stop().slideUp();
                    }
                }
            }

        });

        $button.on( 'click', function( e ){
            e.stopPropagation();
        });

    };

    revealJS.Outsideclick = function(){
        $body.on( 'click', function( e ){

            var card = $( '.card' );

            if ( $( '.card-casing' ).hasClass( 'is-open' ) ) {
                card.find( '.card-casing' ).removeClass( 'is-open' );
                card.find( $button ).text( $open );
                $button.attr( 'data-click-state', '1' );
                $( '.card-btn-actions' ).removeClass( 'show-button' );
                $item.removeClass( 'is-active' );
                $loadmore.css({ 'margin-top':'0' });

                if ( $body.hasClass( 'js-desktop' ) ) {
                    card.find( '.card-content' ).stop().fadeOut();
                }

                if ( $body.hasClass( 'js-mobile' ) ) {
                    card.find( '.card-content' ).stop().slideUp();
                }

            }

        });
    };

    revealJS.Clickstate = function(){

        $( '.js-state-click' ).on( 'click', function(){
            var _this = $( this );
            var close = _this.data( 'close-text' );
            var open = _this.data( 'open-text' );
            var actions = _this.parent( '.card-btn-actions' );
            var item = _this.parents( '.card-item' );

            if( _this.attr( 'data-click-state' ) === '1' ) {
                _this.attr( 'data-click-state', '0' );
                _this.text( close );
                actions.addClass( 'show-button' );
                item.addClass( 'is-active' );

            } else {
                $button.attr( 'data-click-state', '1' );
                _this.attr( 'data-click-state', '1' );
                _this.text( open );
                actions.removeClass( 'show-button' );
                item.removeClass( 'is-active' );
            }

        });

    };

    revealJS.Moveloadmore = function(){
        $( '.js-last-2-item' ).on( 'click', function(){

            var _this = $( this );
            var itemHeight = _this.parents( '.card-item' ).find( '.card-content' ).outerHeight();

            if ( Viewport.documentWidth().width > 768 ) {
                if ( _this.hasClass( 'js-last-2-item' ) ) {
                    if( _this.attr( 'data-click-state' ) === '1' ) {
                        $loadmore.css({ 'margin-top':itemHeight });
                    }else{
                        $loadmore.css({ 'margin-top':'0' });
                    }
                }

            }else{
                $loadmore.css({ 'margin-top':'0' });
            }

        });
    };

    revealJS.Readmore = function(){

        var listsHeight = $( '.column-2-collapse-txt-list' ).outerHeight();

        $( '.js-read-more' ).on( 'click', function(){
            var clickState = $( this ).attr( 'data-click-state' );
            var parent = $( this ).parents( '.js-collapse' );

            var collapseheight = parent.find( '.column-2-collapse-txt-list ul' ).outerHeight();

            if ( clickState === '0' ) {
                 parent.removeClass( 'is-close' );
                 parent.find( '.column-2-collapse-txt-list' ).css({ 'height':collapseheight });
            }else{
                parent.addClass( 'is-close' );
                parent.find( '.column-2-collapse-txt-list' ).css({ 'height':listsHeight });
            }

        });
    };

    revealJS.Morecontent = function(){
        var moreInner = $( '.card-content-more-inner' ).outerHeight();
        var contentMore = $( '.card-content-more' );

        $( '.js-load-more' ).on( 'click', function(){
            contentMore.css({ 'height':moreInner }).addClass( 'is-show' );
            $loadmore.addClass( 'is-show' );
            $( this ).fadeOut( 1000 );
            $( '.card-content-visible .card-btn' ).removeClass( 'js-last-2-item' );
            setTimeout( function(){
                contentMore.addClass( 'is-normalize' );
            }, 1500 );
        });
    };

    revealJS.Resize = function(){

        if ( Viewport.documentWidth().width > 768 ) {
            var resizeHeight = $( '.js-last-2-item' ).parents( '.card-item.is-active' ).find( '.card-content' ).outerHeight();
            $loadmore.css({ 'margin-top': resizeHeight});

        }else{
            $loadmore.css({ 'margin-top':'0' });
        }

    };

    revealJS.Fadein();
    revealJS.Moveloadmore();
    revealJS.Morecontent();
    revealJS.Clickstate();
    revealJS.Outsideclick();
    revealJS.Resize();
    revealJS.Readmore();

    $( window ).on( 'resize', function(){
        revealJS.Resize();
    });

}) (jQuery);
