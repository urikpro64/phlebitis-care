import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { useState } from 'react';
import { LoginData } from '@/pages/api/user/types';
import { useRouter } from 'next/router';

type LoginResult = {
  status: number,
  isCorrect: boolean
}

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const submitLogin = async () => {
    if (!(email && password)) {
      return;
    }

    const loginData: LoginData = {
      email: email,
      password: password
    }

    const submitResult = await fetch('/api/user/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    const loginResult: LoginResult = await submitResult.json();
    if (loginResult && loginResult.isCorrect) {
      router.push("/welcome");
    }
  }

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">เข้าสู่ระบบ</div>

            <div className="w-52 h-52 mb-8 p-4 rounded-full bg-white shadow-lg">
              <Image src={Logo} alt="" className="mt-2" />
            </div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">อีเมล</label>
                <input className="rounded-md py-1 px-2" id="email" name="email" type="email" onChange={
                  e => { setEmail(e.currentTarget.value) }
                }>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">รหัสผ่าน</label>
                <input className="rounded-md py-1 px-2" id="password" name="password" type="password" onChange={
                  e => { setPassword(e.currentTarget.value) }
                }>
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link href="/forgetpassword" className="text-red-500">
            ลืมรหัสผ่าน?
          </Link>
          <div className="flex flex-row space-x-4">
            <Link href="/" className="px-4 py-2 text-white bg-primary rounded-lg">
              ย้อนกลับ
            </Link>
            <button className="px-4 py-2 text-white bg-primary rounded-lg" onClick={
              e => { submitLogin() }
            }>
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
