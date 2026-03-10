const CACHE = 'scouting-6632-v2';

const ASSETS = [
  './',
  './index.html',
  './scout.html',
  './overview.html',
  './dashboard.html',
  './manifest.json',
  './icon.svg',
  './fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf',
  './fonts/IBM_Plex_Sans/static/IBMPlexSans-Regular.ttf',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
