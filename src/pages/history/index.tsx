import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const HistoryPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">

        <div className="flex flex-row">
          <div className="w-full p-3">
            <Link href="/history/operation/1">
              <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
                <div className="w-32 h-32 mb-8 p-4 rounded-full bg-white shadow-lg">
                  <Image src={Logo} alt="" className="mt-2" />
                </div>
                <div className="text-white text-xl text-center">ประวัติการทำหัตถการ</div>
              </div>
            </Link>
          </div>

          <div className="w-full p-3">
            <Link href="/history/phlebitis/1">
              <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
                <div className="w-32 h-32 mb-8 p-4 rounded-full bg-white shadow-lg">
                  <Image src={Logo} alt="" className="mt-2" />
                </div>
                <div className="text-white text-xl text-center">ประวัติการประเมิน phlebitis</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 mt-3">
          <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HistoryPage;
