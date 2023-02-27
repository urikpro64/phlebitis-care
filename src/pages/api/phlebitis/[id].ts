import { mockQuestionnaires, Questionnaire } from '@/pages/api/phlebitis';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Questionnaire | { error: string }>
) {
  const id = Number.parseInt(request.query.id as string);
  const questionnaire = mockQuestionnaires.find((questionnaire) => questionnaire.id === id);

  if (!questionnaire) {
    return response.status(404).json({
      error: 'Questionnaire not found with this id'
    });
  }

  response.status(200).json(questionnaire);
}
