self.addEventListener( 'install', function( event ){
    console.log( 'SW installed' );
    event.waitUntil(
        caches.open( 'static' )
        .then( function( cache ){
            cache.addAll([
                '/',
                '/index.html',
                '/dist/styles/main.css',
                '/dist/styles/main-critical.css'
            ]);
        });
    );
});

self.addEventListener( 'activate', function(){
    console.log( 'SW Activated' );
});
