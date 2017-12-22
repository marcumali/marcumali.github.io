var gridJS = {};

( function($){

	var isAppended = false;

	gridJS.Init = function(){

		gridJS.gridMain();

	};

	gridJS.Appendmain = function(){
		if( Viewport.documentWidth().width <= 991 ){
			var gridMain = $( '.project-main' ).html();

			if ( isAppended === false ) {
				isAppended = true;
				$( '.project-main-mobile' ).prepend( gridMain );

			}

		}else{
			$( '.project-main-mobile .grid-content' ).remove();
			isAppended = false;
		}
	};

	gridJS.gridMain = function(){

		gridJS.Appendmain();

	};

	$( document ).ready( function(){

		gridJS.Init();

	});

	$( window ).on( 'resize', function(){
		gridJS.Appendmain();
	});

}) (jQuery);
