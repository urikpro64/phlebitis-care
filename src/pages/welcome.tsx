import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { User } from '@/pages/api/user/types';

const WelcomePage = () => {
  const route = useRouter();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("/api/user/getUser", {
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => { console.log(error) });
  }, []);

  const logout = async () => {
    const result = await fetch("/api/user/logout")
      .then(respone => respone.json()
      );
    console.log(result);
    if (result && result.isLogout) {
      route.push('/');
    }
  }

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">สวัสดีคุณ {user?.firstname}</div>

            <div className="w-52 h-52 mb-8 mx-auto p-4 rounded-full bg-white shadow-lg">
              <Image src={Logo} alt="" className="mt-2" />
            </div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-4">
                <label className="text-white">HN</label>
                <input className="w-full rounded-md px-2 py-1">
                </input>
              </div>

              <div className="flex flex-row items-center space-x-4">
                <label className="text-white">AN</label>
                <input className="w-full rounded-md px-2 py-1">
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <button onClick={e => logout()} className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </button>
          <Link href="/personal" className="px-4 py-2 text-white bg-primary rounded-lg">
            ถัดไป
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
