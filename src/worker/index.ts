declare let self: ServiceWorkerGlobalScope;

self.addEventListener('message', async (event) => {
  // const registration = await navigator.serviceWorker.ready;
  // registration.showNotification('test');
  // new Notification('test', {
  //   body: event.data.message,
  //   timestamp: event.data.timestamp,
  // });

  console.log(event);

  event?.waitUntil(
    self.registration.showNotification('test', {
      body: event?.data.message,
      timestamp: event?.data.timestamp,
    })
  );
});

export {}
