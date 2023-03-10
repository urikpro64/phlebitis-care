import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DashboardResultPage = () => {
  const router = useRouter();
  const { date } = router.query;
  const [dasboardResult, setDasboardResult] = useState<Array<number>>();
  useEffect(() => {
    fetch(`/api/dashboard/${date}`)
      .then(response => response.json())
      .then(response => setDasboardResult(response));
  }, [date]);
  const formattedDate = new Date(date as string).toLocaleDateString("th-TH");
  if (!dasboardResult) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const pushToGradeHistory = (grade: number) => {
    if(dasboardResult[grade] == 0){
      return (
        <button className="w-fit bg-gray-400 py-1 px-2 rounded-md" disabled>ดู</button>
      )
    }
    return (
      <button className="w-fit bg-secondary py-1 px-2 rounded-md" onClick={() => {
        router.push(`/dashboard/${date}/${grade}`)
      }}>ดู</button>
    )
  }

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl">สรุปผล</div>
            <div className="text-white text-md mb-8">วันที่ {formattedDate}</div>

            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light whitespace-nowrap w-fit pr-1">Grade 0</label>
                <input className="rounded-md pl-2 py-1 w-full" value={dasboardResult[0]} readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
                {pushToGradeHistory(0)}
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light whitespace-nowrap w-fit pr-1">Grade 1</label>
                <input className="rounded-md pl-2 py-1 w-full" value={dasboardResult[1]} readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
                {pushToGradeHistory(1)}
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light whitespace-nowrap w-fit pr-1">Grade 2</label>
                <input className="rounded-md pl-2 py-1 w-full" value={dasboardResult[2]} readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
                {pushToGradeHistory(2)}
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light whitespace-nowrap w-fit pr-1">Grade 3</label>
                <input className="rounded-md pl-2 py-1 w-full" value={dasboardResult[3]} readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
                {pushToGradeHistory(3)}
              </div>

              <div className="flex flex-row items-center space-x-2">
                <label className="text-md text-white font-light whitespace-nowrap w-fit pr-1">Grade 4</label>
                <input className="rounded-md pl-2 py-1 w-full" value={dasboardResult[4]} readOnly>
                </input>
                <div className='text-sm text-white font-light'>คน</div>
                {pushToGradeHistory(4)}
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
