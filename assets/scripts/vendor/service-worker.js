const CACHE_NAME = 'sw-v1';
// let themeDir = document.querySelector('#themeURL');

self.addEventListener('install', (event) => {
  // Perform install steps
  // console.log("Imma Installed SW")
  // console.log(themeDir)

  event.waitUntil(
	    caches.open(CACHE_NAME)
	    .then(cache => cache.addAll(
			[
				'/dist/scripts/main.min.js',
				'./404.html'
			]
		))
	);

});

self.addEventListener('fetch', (event) => {
  // Perform install steps
  // console.log("Imma Fetch SW")

  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
      .then((cached) => {
        var networked = fetch(event.request)
          .then((response) => {
            const cacheCopy = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, cacheCopy));
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    );
  }
  return;

});
