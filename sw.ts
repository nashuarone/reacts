const staticCacheName = "static-cache-v0";
const dynamicCacheName = "dynamic-cache-v0";

const ASSET_LIST = [
    "/",
    "/index.html",
    "/src/main.tsx",
    "/src/App.tsx",
    "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
    "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/fonts/la-brands-400.woff",
];

self.addEventListener("install", async (event) => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(ASSET_LIST);
});

self.addEventListener("activate", async (event) => {
    const cahcesKeysArr = await caches.keys();
    await Promise.all(
        cahcesKeysArr
            .filter(
                (key) => key !== staticCacheName && key !== dynamicCacheName
            )
            .map((key) => caches.delete(key))
    );
});

self.addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request: Request) {
    const cached = await caches.match(request);
    try {
        return (
            cached ??
            fetch(request).then((_) => {
                return networkFirst(request);
            })
        );
    } catch (e) {
        return networkFirst(request);
    }
}

async function networkFirst(request: Request) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const response = await fetch(request);
        await cache.put(request.url, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? (await caches.match("/offline.html"));
    }
}
