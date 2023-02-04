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
      <div className="h-full flex flex-col justify-center items-center">

        <div className="flex flex-row">
          <div className="w-full p-3">
            <Link href="/operation">
            <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
              <div className="w-32 h-32 mb-2 p-4 rounded-full bg-white shadow-lg">
                <Image src={Menu1} alt="" className="" />
              </div>
              <div className="text-white text-xl text-center">หัตถการ</div>
            </div>
            </Link>
          </div>
          
          <div className="w-full p-3">
            <Link href="/questionnaires">
            <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
              <div className="w-32 h-32 mb-2 p-4 rounded-full bg-white shadow-lg">
                <Image src={Menu2} alt="" className="object-scale-down w-20 m-2" />
              </div>
              <div className="text-white text-xl text-center">แบบประเมิน phlebitis</div>
            </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-full p-3">
          <Link href="/history">
            <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
              <div className="w-32 h-32 mb-2 p-4 rounded-full bg-white shadow-lg">
                <Image src={Menu3} alt="" className="" />
              </div>
              <div className="text-white text-xl text-center">ประวัติการประเมินย้อนหลัง</div>
            </div>
            </Link>
          </div>

          <div className="w-full p-3">
          <Link href="">
            <div className="flex flex-col h-full items-center justify-center p-8 bg-primary rounded-lg">
              <div className="w-32 h-32 mb-2 p-4 rounded-full bg-white shadow-lg">
                <Image src={Menu4} alt="" className="" />
              </div>
              <div className="text-white text-xl text-center">แก้ไขข้อมูล</div>
            </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-full p-3">
          <Link href="/dashboard">
            <div className="flex flex-col  items-center justify-center p-8 bg-primary rounded-lg">
              <div className="w-32 h-32 mb-2 p-4 rounded-full bg-white shadow-lg">
                <Image src={Menu5} alt="" className="" />
              </div>
              <div className="text-white text-xl text-center">สรุปผล</div>
            </div>
            </Link>
          </div>
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
