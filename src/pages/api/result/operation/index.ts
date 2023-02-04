import { NextApiRequest, NextApiResponse } from 'next';

export type Result = {
  grade: number,
  date: number,
}

export type Results = {
  id: number,
  hn: string,
  an: string,
  result: Result[],
}

export const mockResults: Results[] = [
  {
    id: 1,
    hn: "123",
    an: "234",
    result: [
      {
        grade: 1,
        date: Date.now(),
      },
      {
        grade: 2,
        date: Date.now(),
      },
      {
        grade: 3,
        date: Date.now(),
      },
      {
        grade: 4,
        date: Date.now(),
      },
      {
        grade: 5,
        date: Date.now(),
      }
    ]
  },
  {
    id: 2,
    hn: "123",
    an: "234",
    result: [
      {
        grade: 1,
        date: Date.now(),
      },
      {
        grade: 2,
        date: Date.now(),
      },
      {
        grade: 3,
        date: Date.now(),
      }
    ]
  }
];

export type ResultWithoutResult = Omit<Results, "results">;

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResultWithoutResult[]>
) {
  response.status(200).json(mockResults);
}

