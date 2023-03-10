import { getCookie, hasCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { body } = request;
  const cookies = request.headers.cookie;
  let hn, an;
  console.log(cookies);
  if (!cookies) {
    response.status(404).json({
      status: 404,
      result: "Cookies not found"
    });
    return
  }

  if (!hasCookie(cookies, "hn") && !hasCookie(cookies, "an")) {
    response.status(404).json({
      status: 404,
      result: "Hn or An not found"
    });
    return
  }

  hn = getCookie(cookies, "hn");
  an = getCookie(cookies, "an");

  const operationHistory = await prisma.operation.findMany({
    where:{
      hn:hn,
      an:an
    },
    include:{
      patient:true
    }
    
  })
  console.log(operationHistory);
  response.status(200).json(operationHistory);
}

