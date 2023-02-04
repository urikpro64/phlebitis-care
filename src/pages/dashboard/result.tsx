import { Container } from '@/components/common/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardResultPage = () => {
  const router = useRouter();
  const { date, mfd, position, exp } = router.query;
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl">สรุปผล</div>
            <div className="text-white text-md mb-8">วันที่ 19/1/2566</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light mx-2">Grade 0</label>
                <input className="rounded-md px-2 py-1" value="1" readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light mx-2">Grade 1</label>
                <input className="rounded-md px-2 py-1" value="0" readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light mx-2">Grade 2</label>
                <input className="rounded-md px-2 py-1" value="0" readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light mx-2">Grade 3</label>
                <input className="rounded-md px-2 py-1" value="0" readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light mx-2">Grade 4</label>
                <input className="rounded-md px-2 py-1" value="0" readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="./" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
            ไปที่เมนู
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DashboardResultPage;
