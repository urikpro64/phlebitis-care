import { prisma } from '@/pages/api/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { date, grade } = request.query;
  const gte = new Date(date as string);
  if(!grade){
    response.status(200).json({
      result:"Please input grade."
    });
    return
  }
  gte.setHours(gte.getHours()-7);
  const lte = new Date(gte);
  lte.setHours(gte.getHours()+24);
  const phlebitisHistory = await prisma.phlebitis.findMany({
    where: {
      date: {
        gte: gte,
        lte: lte
      }
    },
    include:{
      patient:true
    }
  })
  const phlebitisHistoryGrade = phlebitisHistory.filter(phlebitis => phlebitis.grade == +grade);

  response.status(200).json(
    phlebitisHistoryGrade
  );
}
