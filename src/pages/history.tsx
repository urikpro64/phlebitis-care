import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const HistoryPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center m-4">

        <div className="w-full flex flex-row space-x-2">
          <Link href="/history/operation" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Logo} alt="" className="p-1" />
              </div>
              <div className="text-white text-xl text-center">
                หัตถการ
              </div>
            </div>
          </Link>

          <Link href="/phlebitis/history" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Logo} alt="" className="p-2" />
              </div>
              <div className="text-white text-xl text-center">
                แบบประเมิน phlebitis
              </div>
            </div>
          </Link>
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
