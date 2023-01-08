import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const ProfilePage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-center text-white text-xl mb-2">อัพโหลดรูปภาพ</div>
            <div className="text-center text-white font-light mb-4">ขนาดไฟล์อัพโหลดใหญ่สุด: 64 MB</div>

            <div className="w-52 h-52 p-4 rounded-full bg-white shadow-lg">
              <Image src={Logo} alt="" className="mt-2" />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/personal" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <button className="px-4 py-2 text-white bg-primary rounded-lg">
            ยืนยัน
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
