import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Notification.requestPermission().then(() => {
    //   navigator.serviceWorker.controller?.postMessage({
    //     message: 'hi',
    //     timestamp: 5_000,
    //   });
    // });

    console.log('call');
    navigator.serviceWorker.controller?.postMessage({
      message: 'hi',
      timestamp: 5_000,
    });

    // const notify = async () => {
    //   const permission = await window.Notification.requestPermission();
    //   console.log(permission);

    //   navigator.serviceWorker.ready.then((registration) => {
    //     registration.showNotification('test', {
    //       body: 'hi',
    //     });
    //   });
    // };
    // notify();
  }, []);

  return (
    <main>
      1
    </main>
  )
}
