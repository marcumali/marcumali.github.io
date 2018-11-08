var animateJS = {};

( function($){

    var body = $( 'body' );

    animateJS.SubmenuAnchor = function(){
        $( '.js-anchor a[href*=\\#]:not( [href=\\#] )' ).on( 'click keydown', function() {

			keydownClick();

			if ( location.pathname.replace( /^\//,'' ) === this.pathname.replace( /^\//,'' ) && location.hostname === this.hostname ) {

				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice(1) +']' );

				if ( target.length ) {
					$( 'html,body' ).stop().animate({
					scrollTop: target.offset().top - 20
				}, 1000);
					return false;
				}

			}

	    });

    };

    $.fn.parallax = function( options ) {

		var windowHeight = $( window ).height();

			var settings = $.extend({
			speed        : 0.15
			}, options);

		return this.each( function() {

			var $this = $( this );

			function BackgroundPosition(){
				var scrollTop = $( window ).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();

				if ( offset + height <= scrollTop || offset >= scrollTop + windowHeight ) {
					return;
				}

				var yBgPosition = Math.round( (offset - scrollTop) * settings.speed );
				if( Viewport.documentWidth().width >= 767 ){
					$this.css( 'background-position', 'center ' + yBgPosition + 'px' );
				}else{
					$this.css( 'background-position', 'center center' );
				}
			}

			$( window ).on( 'resize', function(){
				new BackgroundPosition();
			});

			$( document ).scroll(function(){
				new BackgroundPosition();
			});

		});

	};

    animateJS.Parallax = function(){
        $( '.js-parallax' ).each( function(){
			var dataSpeed = $( this ).data( 'speed' );
			$( this ).parallax({
				speed : dataSpeed
			});
		});
    };

    animateJS.Fixelements = function(){

        var logoPos = $( '.js-fix-logo' ).offset().top;
        var navPos = $( '.js-fix-nav' ).offset().top;

        function logoFix(){
            if ( $( window ).scrollTop() >= logoPos ) {
                body.addClass( 'is-fix-logo' );
            }else{
                body.removeClass( 'is-fix-logo' );
            }
        }

        function navFix(){
            var navHeight = $( '.navigation-bar.is-first' ).outerHeight();

            if ( $( window ).scrollTop() >= navPos ) {
                body.addClass( 'is-fix-nav' );
            }else{
                body.removeClass( 'is-fix-nav' );
            }
        }

        logoFix();
        navFix();

        $( window ).on( 'scroll', function(){
            logoFix();
            navFix();
        });


    };

    animateJS.SubmenuAnchor();
    animateJS.Parallax();

    $( window ).on({
        load: function(){
            setTimeout( function(){
                animateJS.Fixelements();
            }, 500 );
        },
        resize: function(){
            animateJS.Fixelements();
        }
    });

}) (jQuery);
