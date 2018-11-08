var instagramFeedJS = {};

( function($){

    instagramFeedJS.Init = function(){
            var $container = $( '.js-instafeed' );
            var token = $container.data( 'access-token' ),
            num_photos = 6;

            $.ajax({
            	url: 'https://api.instagram.com/v1/users/self/media/recent',
            	dataType: 'jsonp',
            	type: 'GET',
            	data: { access_token: token, count: num_photos },
            	success: function( data ){
                    var url =  $container.data( 'instagram-url' );
                    var img = $container.data( 'logo-url' );

            		for( var instagramData in data.data ){
            			$container.append('<li class="feed-instagram-list center-image"><a href="' + data.data[ instagramData ].link +'" target="_blank"><img src="' + data.data[ instagramData ].images.low_resolution.url + '"></a></li>');
            		}

                    $container.append( '<li class="feed-instagram-list center-image is-logo"><a href="' + url + '" class="btn btn-primary">VIEW MORE ON INSTAGRAM</a></li>' );
            	},
            	error: function( data ){
            		console.log( data );
            	}
            });
        };

    $( window ).on( 'load', function(){
        setTimeout( function(){
            instagramFeedJS.Init();
        }, 500 );
    });

}) (jQuery);
