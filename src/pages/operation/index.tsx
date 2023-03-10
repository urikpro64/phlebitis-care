import { Container } from '@/components/common/Container';
import { OperationRequest } from '@/pages/api/operation/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const OperationPage = () => {
  const router = useRouter();
  const [mfd, setMfd] = useState<string>();
  const [date, setDate] = useState<string>();
  const [position, setPosition] = useState<string>();

  const submitOperation = async () => {
    if(!(date && mfd && position)){
      return;
    }

    const operationRequest:OperationRequest = {
      date:date,
      mfd:mfd,
      position:position
    }

    const submitResult = await fetch("/api/operation", {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(operationRequest)
    }).then(result => result.json());
    
    if(submitResult.isSuccess){
      router.push({
        pathname:"/operation/history/result",
        query:{
          id:submitResult.data.id
        }
      });
    }
  }
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">หัตถการ</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light">วันที่</label>
                <input className="rounded-md px-2 py-1 w-full" type="date" onChange={
                  e => { setDate(e.currentTarget.value) }
                }>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">MFD</label>
                <input className="rounded-md px-2 py-1 w-full" type="time" placeholder="ตัวอย่าง 12.00" onChange={
                  e => { setMfd(e.currentTarget.value) }
                }>
                </input>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white font-light">ตำแหน่ง</label>
                <input className="rounded-md px-2 py-1 w-full" placeholder="ระบุตำแหน่ง" onChange={
                  e => { setPosition(e.currentTarget.value) }
                }>
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <button className="px-4 py-2 text-white bg-primary rounded-lg" onClick={() => {
            submitOperation()
          }}>
            ถัดไป
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OperationPage;
