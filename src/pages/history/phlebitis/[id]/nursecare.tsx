import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { useRouter } from 'next/router';

const ResultPage = () => {
  const router = useRouter();
  const { id, grade, date ,nursecare} = router.query;
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">ผลการประเมิน</div>
            <div className="text-white mb-3 self-start">Grade: {grade}</div>
            <div className="w-52 h-52 mb-8 p-4 rounded-full bg-white shadow-lg">
              <Image src={Logo} alt="" className="mt-2" />
            </div>

            <div className="w-full flex flex-col space-y-2">
              <div className="bg-white py-10">
                <div className="self-start mx-2">Nurse care: {nursecare}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-row space-x-4">
            <Link href="/history" className="px-4 py-2 text-white bg-primary rounded-lg">
              ประวัติ
            </Link>
            <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
              ไปที่เมนู
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResultPage;
