import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { OperationResponse } from '@/pages/api/operation/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const OperationHistoryPage = () => {
  const router = useRouter();
  const [operation, setOperation] = useState<OperationResponse>();
  const { id } = router.query;
  useEffect(() => {
    fetch(`/api/operation/history/${id}`)
      .then(response => response.json())
      .then(response => setOperation(response))
      .catch(e => console.log(e));
  }, [id]);

  if (!operation) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }
  const newDate = new Date(operation.date).toLocaleDateString('th-TH');
  const newEXP = new Date(operation.exp).toLocaleDateString('th-TH');
  console.log(operation);
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">หัตถการ</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">วันที่</label>
                <input className="rounded-md px-2 py-1 w-full" value={newDate} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">MFD</label>
                <input className="rounded-md px-2 py-1 w-full" value={operation.mfd} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ตำแหน่ง</label>
                <input className="rounded-md px-2 py-1 w-full" value={operation.position} readOnly>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">EXP</label>
                <input className="rounded-md px-2 py-1 w-full" value={newEXP} readOnly>
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-row space-x-4">
            <Link href="./" className="px-4 py-2 text-white bg-primary rounded-lg">
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

export default OperationHistoryPage;
