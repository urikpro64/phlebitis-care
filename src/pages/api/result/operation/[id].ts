import { mockResults, Result } from '@/pages/api/result';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Array<Result> | { error: string }>
) {
  const id = Number.parseInt(request.query.id as string);
  const results = mockResults.find((result) => result.id === id)?.result;

  if (!results) {
    return response.status(404).json({
      error: 'Questionnaire not found with this id'
    });
  }

  response.status(200).json(results);
}
