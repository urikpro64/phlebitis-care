import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const route = useRouter();
  useEffect(() => {
    fetch("/api/user/isLogin", {
      method: "GET",
      credentials: "include"
    })
      .then(result => result.json())
      .then(result => {
        if (result.isLogin) {
          route.push("/welcome");
        }
      });
  });

  // useEffect(() => {
  //   const grantNotification = async () => {
  //     const permission = await window.Notification.requestPermission();
      
  //     if (permission !== 'granted') return;

      // new Notification('Phlebitis', {
      //   body: 'คุณมีนัดตัดขาอีก 5 วัน',
      //   timestamp: Date.now() + 1_000,
      //   icon: '/logo.png',
      // });
  //   };
  //   grantNotification();
  // });


  // const grantPermission = async () => {
  //   const permission = await window.Notification.requestPermission();
  //   console.log(permission);
  // };

  // const notify = async (message: string) => {
  //   const registration = await navigator.serviceWorker.ready;
  //   registration.showNotification('Phlebitis', {
  //     body: 'คุณมีนัดตัดขาอีก 5 วัน',
  //     timestamp: Date.now() + 1_000,
  //     icon: '/logo.png',
  //   });
  // };

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-white text-xl mb-8">ยินดีต้อนรับ</div>

        <div className="w-52 h-52 mb-8 p-4 rounded-full bg-white shadow-lg">
          <Image src={Logo} alt="" className="mt-2" />
        </div>

        <div className="flex flex-col space-y-3">
          <Link href="/login" className="px-4 py-2 text-white bg-primary rounded-lg">
            เข้าสู่ระบบ
          </Link>
          <Link href="/register" className="px-4 py-2 text-white bg-primary rounded-lg">
            ลงทะเบียน
          </Link>
          {/* <button onClick={()=> grantPermission()}>grant</button>
          <button onClick={()=> notify('yo')}>notify</button> */}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
