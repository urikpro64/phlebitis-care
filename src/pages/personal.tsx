import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const PersonalPage = () => {
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-center text-white text-xl mb-4">ประวัติส่วนตัว</div>

            <Link href="/profile">
              <div className="w-52 h-52 mb-8 p-4 rounded-full bg-white shadow-lg">
                <Image src={Logo} alt="" className="mt-2" />
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">ชื่อ</label>
                <input className="w-full px-1 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">นามสกุล</label>
                <input className="w-full px-1 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">HN</label>
                <input className="w-full px-1 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">AN</label>
                <input className="w-full px-1 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">อายุ</label>
                <input className="w-full px-1 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/welcome" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <button className="px-4 py-2 text-white bg-primary rounded-lg">
            แก้ไขประวัติ
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PersonalPage;
