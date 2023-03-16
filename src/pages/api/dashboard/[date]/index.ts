import { Dashboard } from '@/pages/api/dashboard/types';
import { prisma } from '@/pages/api/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { date } = request.query;
  const gte = new Date(date as string);
  gte.setHours(gte.getHours()-7);
  const lte = new Date(gte);
  lte.setHours(gte.getHours()+24);
  const phlebitisHistory:Array<Dashboard> = await prisma.phlebitis.findMany({
    where: {
      date: {
        gte: gte,
        lte: lte
      }
    }
  })
  const grade_0 = phlebitisHistory.filter(phlebitis => phlebitis.grade == 0).length;
  const grade_1 = phlebitisHistory.filter(phlebitis => phlebitis.grade == 1).length;
  const grade_2 = phlebitisHistory.filter(phlebitis => phlebitis.grade == 2).length;
  const grade_3 = phlebitisHistory.filter(phlebitis => phlebitis.grade == 3).length;
  const grade_4 = phlebitisHistory.filter(phlebitis => phlebitis.grade == 4).length;
  response.status(200).json([
    grade_0,
    grade_1,
    grade_2,
    grade_3,
    grade_4,
  ]);
}
