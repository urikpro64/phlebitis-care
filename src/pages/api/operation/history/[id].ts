import { prisma } from '@/pages/api/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id = Number.parseInt(request.query.id as string);
  console.log("test:",id);
  const operation = await prisma.operation.findUnique({
    where:{
      id:id
    }
  })

  if (!operation) {
    return response.status(404).json({
      error: 'Operation not found with this id'
    });
  }

  console.log(operation);
  response.status(200).json(operation);
}
