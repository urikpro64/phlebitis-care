import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { OperationResponse } from '@/pages/api/operation/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const OperationHistoryPage = () => {
  const router = useRouter();
  const [results, setResults] = useState<Array<OperationResponse>>();

  useEffect(() => {
    fetch("/api/operation/history/", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => { });
  }, []);

  if (!results) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const showHistory = () => {
    if (results.length == 0) {
      return (
        <div className="text-center">ไม่พบประวัติการทำหัตถการ</div>
      )
    }
    return (
      results.map((result, index) => {
        const mdfDate = new Date(result.date).toLocaleDateString('th-TH');
        const expDate = new Date(result.exp).toLocaleDateString('th-TH');
        return (
          <Link className="w-full" key={index} href={{
            pathname: '/operation/history/result',
            query: {
              id: result.id,
            }
          }}>
            <div className="flex flex-row space-x-2 bg-blue-200 px-2 py-2 rounded-md">
              <div className="flex flex-row space-x-2">
                <div>MDF: {mdfDate}</div>
              </div>
            </div>
          </Link>
        )
      })
    )
  }

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6 ">
          <div className="flex flex-col items-center p-8 space-y-2 bg-primary rounded-lg">
            <div className="text-white text-xl mb-2 ">ประวัติการทำหัตถการ</div>
            <div className="flex flex-col w-full space-y-2 max-h-96 overflow-auto">
              {showHistory()}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-row space-x-4">
            <Link href="/history" className="px-4 py-2 text-white bg-primary rounded-lg">
              ย้อนกลับ
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OperationHistoryPage;
