if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register( '/pwa/service-worker.js' )
    .then( function(){
        console.log( 'SW Registered' );
    });
}
