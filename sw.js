const CACHE_NAME = "qr-modules-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./module1.html",
  "./module2.html",
  "./style.css",
  "./script.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
