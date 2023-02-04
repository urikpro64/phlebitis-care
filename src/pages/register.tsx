import { Container } from '@/components/common/Container';
import { RegisterData } from '@/pages/api/user/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const RegisterPage = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmpassword, setConfirmpassword] = useState<string>();
  const [validateEmail, setValidateEmail] = useState<string>();

  const validateConfirmpassword = () => {
    if (confirmpassword != password) {
      return (
        <div>ยืนยันรหัสผ่านไม่ตรงกับรหัสผ่านที่ตั้ง</div>
      );
    }
    return;
  }

  const submitRegister = async () => {
    if (!(firstname && lastname && email && password)) {
      return;
    }

    const registerData: RegisterData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }

    const submitResult = await fetch('/api/user/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });

    if (submitResult.status == 200) {
      router.push("/login");
    }
    else if (submitResult.status == 400) {
      setValidateEmail("อีเมลนี้มีการลงทะเบียนแล้ว")
    }
  }
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">ลงทะเบียน</div>
            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ชื่อ</label>
                <input className="rounded-md px-2 py-1" id="firstname" name="firstname" type="text" onChange={
                  e => { setFirstname(e.currentTarget.value) }
                } required>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">นามสกุล</label>
                <input className="rounded-md px-2 py-1" id="lastname" name="lastname" type="text" onChange={
                  e => { setLastname(e.currentTarget.value) }
                } required>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">อีเมล</label>
                <input className="rounded-md px-2 py-1" id="email" name="email" type="email" onChange={
                  e => { setEmail(e.currentTarget.value) }
                } required>
                </input>
                {validateEmail}
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">รหัสผ่าน</label>
                <input className="rounded-md px-2 py-1" id="password" name="password" type="password" onChange={
                  e => { setPassword(e.currentTarget.value) }
                } required>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ยืนยันรหัสผ่าน</label>
                <input className="rounded-md px-2 py-1" id="confirmpassword" name="confirmpassword" type="password" onChange={
                  e => { setConfirmpassword(e.currentTarget.value) }
                } required>
                </input>
                {validateConfirmpassword()}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <button className="px-4 py-2 text-white bg-primary rounded-lg" onClick={
            e => { submitRegister(); }
          }>
            ยืนยัน
          </button>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
