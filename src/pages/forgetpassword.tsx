import { Container } from '@/components/common/Container';
import Link from 'next/link';

const ForgetPasswordPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-6 bg-primary rounded-lg">
            <div className="text-white text-xl mb-2">รีเซ็ตรหัสผ่าน</div>

            <div className="w-full flex flex-col">
              <div className="mx-auto text-sm text-white font-light mb-2">
                ต้องการ <span className="font-medium">รีเซ็ตรหัสผ่าน</span> ให้ป้อน <span className="font-medium">อีเมล</span> ที่ลงทะเบียนไว้
              </div>
              <input className="rounded-md py-1">
              </input>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/login" className="px-4 py-2 text-white bg-primary rounded-lg">
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

export default ForgetPasswordPage;
