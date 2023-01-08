import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';

const HomePage = () => {
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
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
