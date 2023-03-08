self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                '/style.css',
                '/Calc.js',
                '/test1.png',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response)
                return response;
            else
                return fetch(event.request);
        })
    );
});