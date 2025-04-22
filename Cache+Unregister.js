if ('serviceWorker' in navigator && 'caches' in window) {
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
  }).then(() => {
    return navigator.serviceWorker.getRegistrations();
  }).then(registrations => {
    return Promise.all(
      registrations.map(registration => registration.unregister())
    );
  }).then(() => {
    console.log('Service workers and caches cleared.');
  }).catch(err => {
    console.error('Error during service worker removal:', err);
  });
} else {
  console.log('Service workers or caches are not supported in this browser.');
}
