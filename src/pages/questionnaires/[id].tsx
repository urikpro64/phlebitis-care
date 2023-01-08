import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { Questionnaire } from '@/pages/api/questionnaires';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

const QuestionnairePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [questionnaire, setQuestionnaire] = useState<Questionnaire | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/questionnaires/${id}`)
      .then((response) => response.json())
      .then((data) => setQuestionnaire(data))
      .catch((error) => { });
  }, [id]);

  if (!questionnaire) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const toPreviousPage = () => {

  };

  const toNextPage = () => {

  };

  const onSelect = (event: ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <Container>
      <div className="h-full flex flex-col justify-between items-center p-6">
        <div className="mt-24">
          <div className="text-center text-xl text-white">
            {questionnaire.name}
          </div>
          <div className="text-center text-lg text-white">
            Clinical Criteria
          </div>
        </div>

        <div className="space-y-2">
          QUESTION
        </div>

        <div className="flex flex-col items-center mb-32 space-y-6">
          <div className="flex flex-row space-x-2">
            
          </div>

          <div className="flex flex-row space-x-4">
            <button
              onClick={toPreviousPage}
              className="w-24 px-4 py-2 text-white bg-primary rounded-lg"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={toNextPage}
              className="w-24 px-4 py-2 text-white bg-primary rounded-lg"
            >
              ...
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuestionnairePage;
