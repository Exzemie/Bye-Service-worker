if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      // Unregister the service worker
      registration.unregister().then(success => {
        if (success) {
          console.log('Service worker unregistered:', registration);

          // Try to clear caches related to the service worker
          if ('caches' in window) {
            caches.keys().then(cacheNames => {
              cacheNames.forEach(cacheName => {
                caches.delete(cacheName).then(deleted => {
                  if (deleted) {
                    console.log(`Cache ${cacheName} deleted.`);
                  }
                });
              });
            });
          }

          // Attempt to reload the page to prevent re-registration
          setTimeout(() => {
            console.log('Reloading page to apply changes...');
            location.reload(true);
          }, 1000);
        } else {
          console.log('Failed to unregister service worker:', registration);
        }
      });
    });
  }).catch(err => {
    console.error('Error accessing service workers:', err);
  });
} else {
  console.log('Service workers are not supported in this browser.');
}
