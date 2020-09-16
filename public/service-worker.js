const FILES_TO_CACHE = [
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/styles.css',
    '/index.js',
    '/manifest.webmanifest',
    '/db.js',
    '/index.html',
    '/'
]

const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';

// Call install event
self.addEventListener("install", evt => {
  console.log('Service Worker: Installed');   
  // pre cache all static assets
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(FILES_TO_CACHE);
    })
    .then(() => self.skipWaiting())
  );   
});

// Call Activate Event
self.addEventListener("activate", evt => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Call Fetch Event
self.addEventListener('fetch', function(evt) {
  // code to handle requests goes here
  evt.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(evt.request).then(response => {
          return response || fetch(evt.request);
      });
    })
  );
});   

