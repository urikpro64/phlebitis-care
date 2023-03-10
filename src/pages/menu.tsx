import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Menu1 from '@/public/menu1.png';
import Menu2 from '@/public/menu2.png';
import Menu3 from '@/public/menu3.png';
import Menu4 from '@/public/menu4.png';
import Menu5 from '@/public/menu5.png';

const MenuPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center m-4 space-y-2">

        <div className="w-full flex flex-row space-x-2">
          <Link href="/operation" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Menu1} alt="" className="p-1" />
              </div>
              <div className="text-white text-xl text-center">
                หัตถการ
              </div>
            </div>
          </Link>

          <Link href="/phlebitis" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Menu2} alt="" className="p-2" />
              </div>
              <div className="text-white text-xl text-center">
                แบบประเมิน phlebitis
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full flex flex-row space-x-2">
          <Link href="/history" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Menu3} alt="" className="p-1" />
              </div>
              <div className="text-white text-xl text-center">
                ประวัติการประเมินย้อนหลัง
              </div>
            </div>
          </Link>

          <Link href="/personal/update" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Menu4} alt="" className="" />
              </div>
              <div className="text-white text-xl text-center">
                แก้ไขข้อมูล
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full flex flex-row space-x-2">
          <Link href="/dashboard" className="w-full flex flex-col bg-primary rounded-lg justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 m-4">
              <div className="w-28 h-28 p-3 bg-white rounded-full">
                <Image src={Menu5} alt="" className="p-1" />
              </div>
              <div className="text-white text-xl text-center">
                สรุปผล
              </div>
            </div>
          </Link>

        </div>

        <div className="flex flex-col items-center space-y-2 mt-3">
          <Link href="/personal" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MenuPage;
