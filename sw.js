const CACHE_NAME = 'weather-vault-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
