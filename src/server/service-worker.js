import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline').then((cache) =>
            cache.add('/offline.html')
        )
    );
});

registerRoute(
    ({ request }) => request.mode === 'navigate',
    async () => {
        return (await caches.match('/offline.html')) || fetch('/offline.html');
    }
);

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
    })
);

registerRoute(
    ({ request }) => request.destination === 'font',
    new CacheFirst({
        cacheName: 'fonts',
    })
);
