// Service Worker para cache e performance
const CACHE_NAME = 'gameaccess-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/politica-privacidade.html',
    '/termos-uso.html',
    '/sobre-nos.html',
    // Imagens principais
    '/x5IqghY2ip2L.jpeg',
    '/kgZgZs2eZVTs.webp',
    '/TG4HdZBPzqOb.jpg',
    '/5xsGLb7MAgrT.jpg',
    // Fontes do Google
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Instalação do Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptação de requisições
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - retorna a resposta
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Verifica se recebemos uma resposta válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANTE: Clone a resposta. Uma resposta é um stream
                        // e porque queremos que o navegador consuma a resposta
                        // assim como o cache consumindo a resposta, precisamos
                        // cloná-la para que tenhamos dois streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Atualização do Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

