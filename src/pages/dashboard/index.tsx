import { Container } from '@/components/common/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [date, setDate] = useState<string>();

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 space-y-2 bg-primary rounded-lg">
            <div className="text-white text-xl mb-2">สรุปผลรายวัน</div>
            <div className="flex flex-col">
                <input className="rounded-md px-2 py-1" type="date" placeholder='วัน/เดือน/ปี(พ.ศ.)' onChange={ e => {
                  setDate(e.currentTarget.value);
                }}>
                </input>
              </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-row space-x-4">
            <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
              ย้อนกลับ
            </Link>
            <Link href={{
              pathname:`/dashboard/${date}`
            }}className="px-4 py-2 text-white bg-primary rounded-lg">
              ถัดไป
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
