'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '../InfiniteBlockMayhem/index.html',
    '../InfiniteBlockMayhem/Build/sInfiniteBlockMayhem.data.unityweb',
    '../InfiniteBlockMayhem/Build/InfiniteBlockMayhem.json',
    '../InfiniteBlockMayhem/Build/InfiniteBlockMayhem.wasm.code.unityweb',
    '../InfiniteBlockMayhem/Build/InfiniteBlockMayhem.wasm.framework.unityweb',
    '../InfiniteBlockMayhem/Build/UnityLoader.js',
    '../InfiniteBlockMayhem/TemplateData/favicon.ico',
    '../InfiniteBlockMayhem/TemplateData/fullscreen.png',
    '../InfiniteBlockMayhem/TemplateData/progressEmpty.Dark.png',
    '../InfiniteBlockMayhem/TemplateData/progressEmpty.Light.png',
    '../InfiniteBlockMayhem/TemplateData/progressFull.Dark.png',
    '../InfiniteBlockMayhem/TemplateData/progressFull.Light.png',
    '../InfiniteBlockMayhem/TemplateData/progressLogo.Dark.png',
    '../InfiniteBlockMayhem/TemplateData/progressLogo.Light.png',
    '../InfiniteBlockMayhem/TemplateData/style.css',
    '../InfiniteBlockMayhem/TemplateData/UnityProgress.js',
    '../InfiniteBlockMayhem/TemplateData/webgl-logo.png',
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