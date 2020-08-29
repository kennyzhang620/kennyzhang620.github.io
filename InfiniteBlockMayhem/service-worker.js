'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE = 'dynamic-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html'
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // CODELAB: Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME && key !== DATA_CACHE) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    // CODELAB: Add fetch event handler here.
    evt.respondWith(
        caches.open(DATA_CACHE).then((cache) => {
            return fetch(evt.request, { timeout: 500 })
                .then((response) => {
                    // If the response was good, clone it and store it in the cache.
                    if (response.status === 200) {
                        console.log("Stored data onto cache");
                        cache.put(evt.request.url, response.clone());
                    }
                    return response;
                }).catch((err) => {
                    // Network request failed, try to get it from the cache.
                    console.log("Loaded data onto cache. Reason: " + err);
                    return cache.match(evt.request);
                });
        }));
});