import { NextApiRequest, NextApiResponse } from 'next';

export type Questionnaire = {
  id: number,
  name: string,
  questions: string[],
};

export type QuestionnaireWithoutQuestion = Omit<Questionnaire, 'questions'>;

export const mockQuestionnaires: Questionnaire[] = [
  {
    id: 1,
    name: 'Phlebitis scale',
    questions: [
      'Streak formation มีรอยแดงเป็นทาง',
      'Palpable venous cord คลำได้หลอดเลือดแห้ง',
      'Palpable venous cord > inch in length คลำได้หลอดเลือดแข็งยาวมากกว่า 1 นิ้ว',
      'Purulent drainage พบหนอง',
      'No symptom ไม่มีอาการ',
      'Erythema at access site with or without pain แดงรอบรอยเข้ม (มีอาการปวดหรือไม่มีก็ได้)',
      'Paint at access site with erythema and/or edema ปวดและแดงรอบรอยเข้ม (บวมหรือไม่บวมก็ได้)',
      'Paint at access site with erythema ปวดรอบรอยเข้มร่วมกับแดง',
    ],
  }
];

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<QuestionnaireWithoutQuestion[]>
) {
  const questionnaires = mockQuestionnaires
    .map((questionnaire) => ({
      id: questionnaire.id,
      name: questionnaire.name,
    }));
  response.status(200).json(questionnaires);
}
