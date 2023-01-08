import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const WelcomePage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">สวัสดีคุณ %name%</div>

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
          <Link href="/" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <Link href="/personal" className="px-4 py-2 text-white bg-primary rounded-lg">
            ประวัติส่วนตัว
          </Link>
          <Link href="/questionnaires" className="px-4 py-2 text-white bg-primary rounded-lg">
            แบบสอบถาม
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
