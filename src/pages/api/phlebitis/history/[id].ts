import { prisma } from '@/pages/api/lib/prisma';
import { Phlebitis } from '@/pages/api/phlebitis/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = Number.parseInt(request.query.id as string);
  const phlebitis = await prisma.phlebitis.findUnique({
    where:{
      id:id
    }
  })

  if (!phlebitis) {
    return response.status(404).json({
      error: 'Phlebitis not found with this id'
    });
  }

  console.log(phlebitis);
  response.status(200).json(phlebitis);
}
