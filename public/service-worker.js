// const FILES_TO_CACHE = [
//     '/icons/icon-192x192.png',
//     '/icons/icon-512x512.png',
//     '/styles.css',
//     '/index.js',
//     '/manifest.webmanifest',
//     '/database.js'
// ]
// const CACHE_NAME = 'static-cache-v2';
// const DATA_CACHE_NAME = 'data-cache-v1';
// // install
// self.addEventListener("install", function (evt) {
//     // pre cache image data
//     evt.waitUntil(
//       caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/images"))
//       );
      
//     // pre cache all static assets
//     evt.waitUntil(
//       caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
//     );
  
//     // tell the browser to activate this service worker immediately once it
//     // has finished installing
//     self.skipWaiting();
//   });
//   self.addEventListener("activate", function(evt) {
//     evt.waitUntil(
//       caches.keys().then(keyList => {
//         return Promise.all(
//           keyList.map(key => {
//             if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//               console.log("Removing old cache data", key);
//               return caches.delete(key);
//             }
//           })
//         );
//       })
//     );
  
//     self.clients.claim();
//   });
//   self.addEventListener('fetch', function(evt) {
//     // code to handle requests goes here
//     evt.respondWith(
//         caches.open(CACHE_NAME).then(cache => {
//           return cache.match(evt.request).then(response => {
//             return response || fetch(evt.request);
//           });
//         })
//       );
//     });
// Collapse



