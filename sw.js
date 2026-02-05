self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('qr-offline-cache').then(cache => {
      return cache.addAll([
        './communication.html',
        './money.html',
        './style.css',
        './script.js'
      ]);
    })
  );
});
