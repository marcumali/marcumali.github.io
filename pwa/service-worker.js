self.addEventListener( 'install', function(){
    console.log( 'SW installed' );
    event.waitUntil(
        caches.open( function( cache ){
            cache.addAll([
                '/',
                '/index.html'
            ]);
        });
    );
});

self.addEventListener( 'activate', function(){
    console.log( 'SW Activated' );
});
