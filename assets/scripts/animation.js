var animationJS = {};

( function ($) {

	animationJS.Init = function(){

		animationJS.ShowText();
		animationJS.Fadetoggle();
		$.fn.parallax();

		setTimeout( function(){
			animationJS.Border();
		}, 2000);

		setTimeout( function(){
			animationJS.Nav();
		}, 3000);

		$( '.js-parallax' ).each( function(){
			var dataSpeed = $( this ).data( 'speed' );
			$( this ).parallax({
				speed : dataSpeed
			});
		});

	};

	animationJS.ShowText = function(){

		setTimeout( function(){
			$( '.animate-text' ).addClass( 'in' );
		}, 1200);

	};

	animationJS.Border = function(){

		var animate = $( '.navbar-nav .menu-item' );
		var time = 400;
		var eClass = 'in';
		animateIn( animate, time, eClass );

	};

	animationJS.Nav = function(){

		var animate = $( '.js-border-animate .bar' );
		var time = 600;
		var eClass = 'in';
		animateIn( animate, time, eClass );

	};

	animationJS.Fadetoggle = function(){
		var target = $( '.js-fade-toggle' );
		var targetHeight = target.outerHeight();

		$( document ).on( 'scroll', function( e ){
		    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
		    if( scrollPercent >= 0 ){
		        target.css( 'opacity', scrollPercent );
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
				BackgroundPosition();
			});

			$( document ).scroll(function(){
				BackgroundPosition();
			});

		});

	};

	animationJS.Loader = function(){
		$( '.block-loader' ).slideUp( 500 );
	};

	$( document ).ready( function(){
		animationJS.Init();
	});

	$( window ).on( 'load', function(){
		animationJS.Loader();
	});

}) ( jQuery );
