import { Container } from '@/components/common/Container';
import { Questionnaire } from '@/pages/api/phlebitis';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const QuestionnairesPage = () => {
  const [questionnaires, setQuestionnaires] = useState<Questionnaire[] | null>(null);

  useEffect(() => {
    fetch('/api/phlebitis')
      .then((response) => response.json())
      .then((data) => setQuestionnaires(data))
      .catch((error) => {});
  }, []);
  
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-white text-xl mb-6">แบบประเมิน</div>

            {questionnaires && questionnaires.map((questionnaire) => (
              <Link
                key={questionnaire.id}
                href={`/phlebitis/` + questionnaire.id}
                className="w-full px-2 py-1 bg-white text-black text-center text-lg rounded-lg"
              >
                {questionnaire.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/menu" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <Link href={`/phlebitis/` + "1"} className="px-4 py-2 text-white bg-primary rounded-lg">
            เริ่มประเมิน
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default QuestionnairesPage;
