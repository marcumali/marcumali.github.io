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

                        var lists = $( '.feed-instagram-list' );
                        var dataSrc = data.data[ instagramData ].images.low_resolution.url;
                //        var dataDefer = data.data[ instagramData ].images.data( 'src' );

                //        lists.find( 'img' ).attr( 'src', dataDefer );

                    console.log( data.data[ instagramData ].images );

            			$container.append( '<li class="feed-instagram-list center-image"><a href="' + data.data[ instagramData ].link +'" target="_blank" rel="noreferrer noopener" aria-label="Instagram"><img data-src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" src="' + dataSrc + '" alt="Instagram Image"></a></li>');
            		}

                    $container.append( '<li class="feed-instagram-list center-image is-logo"><a href="' + url + '" class="btn btn-primary" target="_blank" rel="noreferrer noopener">VIEW MORE ON INSTAGRAM</a></li>' );
            	},
            	error: function( data ){
            		console.log( data );
            	}
            });
        };

        if ( $container.length > 0 ) {
            instagramFeedJS.Init();
        }

}) (jQuery);
