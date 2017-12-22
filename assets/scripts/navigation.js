var navigationJS = {};

( function($){

	navigationJS.Init = function(){

		navigationJS.Mobile();

	};

	function viewport(){

		$( window ).on( 'scroll', function(){

			if ( $( window ).scrollTop() >= 10 ) {

				if( Viewport.documentWidth().width <= 767 ){
					$( '.navbar' ).addClass( 'minimize' );
				}else{
					$( '.navbar' ).removeClass( 'minimize maximize' );
				}

			}else{
				$( '.navbar' ).removeClass( 'minimize maximize' );
				$( '.navbar-toggle' ).removeClass( 'navbar-open' );
			}

		});

	}

	navigationJS.Mobile = function(){

		viewport();

		$( '.navbar-collapse' ).on( 'shown.bs.collapse', function(){
			$( '.navbar' ).addClass( 'maximize' );
			$( '.navbar-toggle' ).addClass( 'navbar-open' );
		}).on( 'hidden.bs.collapse', function(){
			$( '.navbar' ).removeClass( 'maximize' );
			$( '.navbar-toggle' ).removeClass( 'navbar-open' );
		});

	};

	$( document ).ready( function(){

		navigationJS.Init();

	});

	$( window ).on( 'resize',function(){

		viewport();

	});

}) ( jQuery );
