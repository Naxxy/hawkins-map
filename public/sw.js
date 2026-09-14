// Minimal offline cache for the Map of Consciousness app.
// Bump CACHE to force every client to refetch on next launch.
const CACHE = 'hawkins-map-v1'

// Vite's dev-server plumbing must never be cached, or HMR breaks.
const DEV_PATHS = ['/@vite', '/@react-refresh', '/@fs', '/src/', '/node_modules/']
const isDev = (url) => DEV_PATHS.some((p) => url.pathname.includes(p)) || url.search.includes('t=')

self.addEventListener('install', (e) => self.skipWaiting())

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url)
  if (e.request.method !== 'GET' || url.origin !== self.location.origin || isDev(url)) return

  // Navigations: network first, so a deploy lands immediately; cache is the offline fallback.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put(e.request, copy))
          return res
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match('./')))
    )
    return
  }

  // Everything else: serve from cache immediately, refresh in the background.
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(e.request, copy))
          }
          return res
        })
        .catch(() => cached)
      return cached || network
    })
  )
})
