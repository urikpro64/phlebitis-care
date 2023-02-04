import { Container } from '@/components/common/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';

const OperationResultPage = () => {
  const router = useRouter();
  const { date, mfd, position, exp} = router.query;
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">หัตถการ</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">วันที่</label>
                <input className="rounded-md px-2 py-1" value={date} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">MFD</label>
                <input className="rounded-md px-2 py-1" value={mfd} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ตำแหน่ง</label>
                <input className="rounded-md px-2 py-1" value={position} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">EXP</label>
                <input className="rounded-md px-2 py-1" value={exp} readOnly>
                </input>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="../1" className="px-4 py-2 text-white bg-primary rounded-lg">
            ประวัติ
          </Link>
          <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
            ไปที่เมนู
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OperationResultPage;
