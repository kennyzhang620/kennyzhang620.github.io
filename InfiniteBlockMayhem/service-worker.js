'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'Build/sInfiniteBlockMayhem.data.unityweb',
    'Build/InfiniteBlockMayhem.json',
    'Build/InfiniteBlockMayhem.wasm.code.unityweb',
    'Build/InfiniteBlockMayhem.wasm.framework.unityweb',
    'Build/UnityLoader.js',
    'TemplateData/favicon.ico',
    'TemplateData/fullscreen.png',
    'TemplateData/progressEmpty.Dark.png',
    'TemplateData/progressEmpty.Light.png',
    'TemplateData/progressFull.Dark.png',
    'TemplateData/progressFull.Light.png',
    'TemplateData/progressLogo.Dark.png',
    'TemplateData/progressLogo.Light.png',
    'TemplateData/style.css',
    'TemplateData/UnityProgress.js',
    'TemplateData/webgl-logo.png',
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
                if (key !== CACHE_NAME) {
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
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match(evt.request);
                    });
            })
    );
});