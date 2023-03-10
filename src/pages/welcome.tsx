import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { PatientRequest } from '@/pages/api/patient/types';
import { User } from '@/pages/api/user/types';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WelcomePage = () => {
  const route = useRouter();
  const [user, setUser] = useState<User>();
  const [hn, setHn] = useState<string>();
  const [an, setAn] = useState<string>();

  useEffect(() => {
    fetch("/api/user/isLogin", {
      method: "GET",
      credentials: "include"
    })
      .then(result => result.json())
      .then(result => {
        if (!result.isLogin) {
          route.push("/")
        }
      });

    fetch("/api/user/getByCookies", {
      credentials: "include"
    })
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((error) => { console.log(error) });
  }, [route]);

  if (!user) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const submitPatient = async () => {
    if (!hn || !an) {
      return
    }

    const patientRequest: PatientRequest = {
      hn: hn,
      an: an
    }

    const submitResult = await fetch("/api/patient/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patientRequest)
    }).then(response => response.json());

    if (submitResult.isSelectPatient) {
      route.push('/personal');
    }
  }

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
                <input className="w-full rounded-md px-2 py-1" id="hn" name="hn" type="text" onChange={
                  (e) => { setHn(e.currentTarget.value) }
                }>
                </input>
              </div>

              <div className="flex flex-row items-center space-x-4">
                <label className="text-white">AN</label>
                <input className="w-full rounded-md px-2 py-1" id="an" name="an" type="text" onChange={
                  (e) => { setAn(e.currentTarget.value) }
                }>
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <button onClick={e => logout()} className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </button>
          <button onClick={e => submitPatient()} className="px-4 py-2 text-white bg-primary rounded-lg">
            ถัดไป
          </button>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
