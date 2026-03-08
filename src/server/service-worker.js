import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('html-shell').then((cache) => cache.add('/'))
    );
});

registerRoute(
    ({ request }) => request.mode === 'navigate',
    async () => {
        const cached = await caches.match('/');
        return cached || fetch('/');
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
