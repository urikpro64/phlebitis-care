import { Container } from '@/components/common/Container';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">ลงทะเบียน</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">อีเมล</label>
                <input className="rounded-md px-2 py-1">
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">รหัสผ่าน</label>
                <input className="rounded-md px-2 py-1">
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ยืนยันรหัสผ่าน</label>
                <input className="rounded-md px-2 py-1">
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <Link href="/register" className="px-4 py-2 text-white bg-primary rounded-lg">
            ยืนยัน
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
