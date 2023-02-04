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
      'ไม่มีอาการแสดง',
      'แดงรอบรอยเข็ม(มีอาการปวดหรือไม่ปวดก็ได้)',
      'ปวดและแดงรอบรอยเข็ม(บวมหรือไม่บวมก็ได้)',
      'ปวดรอบรอยเข็มรวมกับแดง',
      'มีรอยแดงเป็นทาง',
      'คลำได้หลอดเลือดแข็ง',
      'คลำได้หลอดเลือกแข็งยาวมากกว่า 1 นิ้ว',
      'พบหนอง'
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
