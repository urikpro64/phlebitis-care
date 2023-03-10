import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Phlebitis } from '@/pages/api/phlebitis/types';
import { Spinner } from '@/components/common/Spinner';
import grade0 from "@/public/phlebitis/0.jpg"
import grade1 from "@/public/phlebitis/1.jpg"
import grade2 from "@/public/phlebitis/2.jpg"
import grade3 from "@/public/phlebitis/3.jpg"
import grade4 from "@/public/phlebitis/4.jpg"

const imageList = [
  grade0,
  grade1,
  grade2,
  grade3,
  grade4
]

const mockNursecare = [
  "Observer IV site & Monitor",
  "เปลี่ยน IV site & Monitor",
  "เปลี่ยน IV site ประคบเย็นเพื่อลดปวด ประคบร้อนเพื่อลดบวม & Monitor",
  "เปลี่ยน IV site ประคบเย็นเพื่อลดปวด ประคบร้อนเพื่อลดบวม รายงานแพทย์ รายงานอุบัติการณ์ & Monitor",
  "เปลี่ยน IV site ประคบเย็นเพื่อลดปวด ประคบร้อนเพื่อลดบวม รายงานแพทย์ รายงานอุบัติการณ์ & Monitor",
]

const NursecarePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [phlebitis, setPhlebitis] = useState<Phlebitis>()

  useEffect(() => {
    if (!id) return;
    fetch(`/api/phlebitis/history/${id}`)
      .then(response => response.json())
      .then(response => setPhlebitis(response))
      .catch(e => console.log(e));
  }, [id])

  if (!phlebitis) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const nursecare = mockNursecare[phlebitis.grade];
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-8">ผลการประเมิน</div>
            <div className="text-white mb-3 self-start">Grade: {phlebitis?.grade}</div>
            <div className="w-52 mb-2 items-center justify-center">
              <Image src={imageList[phlebitis.grade]} alt="" className="mt-2" />
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

export default NursecarePage;
