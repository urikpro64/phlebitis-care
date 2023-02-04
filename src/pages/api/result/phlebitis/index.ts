import { NextApiRequest, NextApiResponse } from 'next';

export type Result = {
  grade: number,
  date: number,
  nursecare: string,
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
        grade: 0,
        date: Date.now(),
        nursecare: "Observe IV site & Monitor"
      },
      {
        grade: 1,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site & Monitor"
      },
      {
        grade: 2,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site ประคบเย็นเพื่อลดอาการปวด ประคบร้อนเพื่อลดอาการบวม & Monitor"
      },
      {
        grade: 3,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site ประคบเย็นเพื่อลดอาการปวด ประคบร้อนเพื่อลดอาการบวม รายงานแพทย์ รายงานอุบัติการณ์ & Monitor"
      },
      {
        grade: 0,
        date: Date.now(),
        nursecare: "Observe IV site & Monitor"
      },
      {
        grade: 1,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site & Monitor"
      },
      {
        grade: 2,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site ประคบเย็นเพื่อลดอาการปวด ประคบร้อนเพื่อลดอาการบวม & Monitor"
      },
      {
        grade: 3,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site ประคบเย็นเพื่อลดอาการปวด ประคบร้อนเพื่อลดอาการบวม รายงานแพทย์ รายงานอุบัติการณ์ & Monitor"
      },
      {
        grade: 4,
        date: Date.now(),
        nursecare: "เปลี่ยน IV site ประคบเย็นเพื่อลดอาการปวด ประคบร้อนเพื่อลดอาการบวม รายงานแพทย์ รายงานอุบัติการณ์ & Monitor"
      }
    ]
  },
];

export type ResultWithoutResult = Omit<Results, "results">;

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResultWithoutResult[]>
) {
  response.status(200).json(mockResults);
}

