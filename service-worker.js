self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("calculadora-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/calculadora.css",
          "/calculadora.js",
          "/icon.png"
        ]);
      })
    );
    console.log("Service Worker instalado");
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  