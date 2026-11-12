const CACHE='tablero-v9';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.json','./icon.svg','./engine/stockfish-19-lite-single.js','./engine/stockfish-19-lite-single.wasm','./engine/COPYING.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(response=>{if(response.ok&&new URL(e.request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return response;})));});
