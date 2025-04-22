if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister().then(success => {
        if (success) {
          console.log('Service worker unregistered:', registration);
        } else {
          console.log('Failed to unregister service worker:', registration);
        }
      });
    });
  });
} else {
  console.log('Service workers are not supported in this browser.');
}
