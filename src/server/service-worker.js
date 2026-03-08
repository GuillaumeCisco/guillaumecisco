import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { registerRoute, setCatchHandler, setDefaultHandler } from 'workbox-routing';
import { CacheFirst, NetworkOnly } from 'workbox-strategies';

console.log('SW VERSION OFFLINE V2 DIST WEB');

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST || []);

// Toutes les navigations tentent le réseau.
// Si ça échoue, setCatchHandler prend la main.
setDefaultHandler(new NetworkOnly());

setCatchHandler(async ({ event }) => {
    if (event.request.destination === 'document') {
        return (await matchPrecache('/dist/web/offline.html')) || Response.error();
    }
    return Response.error();
});

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({ cacheName: 'images' })
);

registerRoute(
    ({ request }) => request.destination === 'font',
    new CacheFirst({ cacheName: 'fonts' })
);
