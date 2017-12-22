var e = {};
var etype = e.type;

function keydownClick(){

	if( etype === 'keydown' && (e.keyCode !== 13 || e.keyCode !== 32) ) {
		 return true;
	}

}

var Viewport = {};

Viewport.documentWidth = function(){
	var e = window, a = 'inner';
	if ( !('innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
};

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
