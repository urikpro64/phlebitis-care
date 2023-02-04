import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { Result } from '@/pages/api/result/phlebitis';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const OperationResultsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [results, setResults] = useState<Array<Result> | null>(null);

  // useEffect(() => {
  //   if (!id) return;
  //   fetch(`/api/result/phlebitis/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setResults(data))
  //     .catch((error) => { });
  // }, [id]);

  // if (!results) {
  //   return (
  //     <Container>
  //       <div className="h-full flex justify-center items-center">
  //         <Spinner className="w-10 h-10 text-white animate-spin" />
  //       </div>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 space-y-2 bg-primary rounded-lg">
            <div className="text-white text-xl mb-2">ประวัติการทำหัตถการ</div>
            {/* {results.map((result, index) => {
              const formattedDate = new Date(result.date).toLocaleDateString('th-TH');
              return (
              <Link className="w-full" key={index} href={{
                pathname: id + '/nursecare',
                query: {
                  id: id,
                  grade: result.grade,
                  date: formattedDate,
                  nursecare: result.nursecare
                  
                }
              }}>
                <div className="flex flex-row space-x-2 bg-blue-200 px-2 py-2 rounded-md">
                  <div>Grade: {result.grade}</div>
                  <div>{formattedDate}</div>
                </div>
              </Link>
            )})} */}
            <Link className="w-full" href={{
              pathname: id + '/result',
              query: {
                id: id,
                date: new Date().toLocaleDateString("th-TH"),
                mfd: "13.50",
                position: "หลังมือด้านซ้าย",
                exp: "23/1/2566"
              }
            }}>
              <div className="flex flex-row space-x-2 bg-blue-200 px-2 py-2 rounded-md">
                <div>{new Date().toLocaleDateString()}</div>
              </div>
            </Link>
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

export default OperationResultsPage;
