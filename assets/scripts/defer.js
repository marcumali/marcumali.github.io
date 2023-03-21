var deferFnc = {};

( function( $ ){

    deferFnc.Img = function(){

        var imgDefer = $( 'img' );
        var imgBgDefer = $( '.js-defer-bg' );

        $.each( imgDefer, function( index, value ){

            var _this = $( value );
            var dataSrc = _this.data( 'src' );

            _this.attr( 'src', dataSrc );

        });

        $.each( imgBgDefer, function( index, value ){

            var _this = $( value );
            var dataSrc = _this.data( 'src' );

            _this.attr( 'style', 'background-image: url( ' + dataSrc + ')' );

        });

    };

    deferFnc.Img();

}) (jQuery);
