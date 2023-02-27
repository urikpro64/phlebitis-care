import { Container } from '@/components/common/Container';
import { Spinner } from '@/components/common/Spinner';
import { Questionnaire } from '@/pages/api/phlebitis';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

const QuestionnairePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [questionnaire, setQuestionnaire] = useState<Questionnaire | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const QUESTION_PER_PAGE = 8;
  const QUESTION_LENGTH = questionnaire ? questionnaire?.questions.length : 0;
  const LAST_PAGE_INDEX = Math.ceil(QUESTION_LENGTH / QUESTION_PER_PAGE) - 1;
  const [result, setResult] = useState<Array<boolean>>(Array(8).fill(false));

  useEffect(() => {
    if (!id) return;
    fetch(`/api/phlebitis/${id}`)
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

  const getAllCurrentQuestion = () => {
    const startQuestion = currentPage * QUESTION_PER_PAGE;
    const stopQuestion = startQuestion + QUESTION_PER_PAGE;
    const currentQuestion = questionnaire.questions.slice(startQuestion, stopQuestion);
    return currentQuestion;
  }

  const toPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    else {
      router.push('/menu');
    }
  };

  const toNextPage = async () => {
    if (currentPage < LAST_PAGE_INDEX) {
      setCurrentPage(currentPage + 1);
    }
    else {
      const submitResult = await fetch("/api/phlebitis/result", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ result: result })
      }).then(response => response.json())

      console.log(submitResult);
      if(submitResult.status == 200){
        router.push({
          pathname: '/phlebitis/history/nursecare',
          query: {
            id:submitResult.data.id
          }
        });
      }
    }
  };

  const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const newResult = result.map((questionResult, questionIndex) => {
      if (event.currentTarget.id == questionIndex.toString()) {
        return event.currentTarget.checked;
      }
      return questionResult;
    })
    setResult(newResult);
  };


  return (
    <Container>
      <div className="h-full flex flex-col justify-between items-center p-6">
        <div className="mt-4 font-semibold drop-shadow-xl">
          <div className="text-center text-2xl text-white ">
            {questionnaire.name}
          </div>
          <div className="text-center text-xl text-white mb-4">
            Clinical Criteria
          </div>
        </div>
        <div className="space-y-4">
          {/* <div>{result+''}</div> */}
          {getAllCurrentQuestion().map((question, index) => {
            const id = (index + currentPage * QUESTION_PER_PAGE);
            const elementKey = "question" + id;
            return (
              <div key={elementKey} className="flex flex-row space-x-2 w-full">
                <input type="checkbox" id={id.toString()} onChange={onSelect} checked={result[id]} />
                <div className="flex w-full bg-blue-200 rounded-3xl text-xl font-mono p-3">{question}</div>
              </div>
            )
          })}
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
              หน้าถัดไป
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuestionnairePage;
