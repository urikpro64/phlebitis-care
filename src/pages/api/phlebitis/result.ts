import { getCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { getUserByCookies } from '@/pages/api/lib/sessionUser';
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const getGrade = (result: boolean[]) => {
  if ((result[6] || result[7])) {
    return 4;
  }
  else if ((result[3] || result[4] || result[5])) {
    return 3;
  }
  else if ((result[2])) {
    return 2;
  }
  else if ((result[1])) {
    return 1;
  }
  else {
    return 0;
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { body } = request;
  const phlebitisResult: boolean[] = body.result;
  const cookies = request.headers.cookie;
  if (request.method == "POST") {
    if (!cookies) {
      response.status(400).json({ result: "Cookie not found." });
      response.end();
    } else {
      const user = await getUserByCookies(cookies);
      const userId = user ? user.id : "0";
      const phlebitis: Prisma.PhlebitisCreateArgs = {
        data: {
          hn: getCookie(cookies, "hn"),
          an: getCookie(cookies, "an"),
          grade: getGrade(phlebitisResult),
          date: new Date(),
          userId: userId
        }
      }
      console.log(phlebitis);
      const createPhlebitis = await prisma.phlebitis.create(phlebitis)
        .then(async (data) => {
          response.status(200).json({
            status: 200,
            result: "Phlebitis saved.",
            data:data
          });
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.log(e);
          response.status(400).json({
            status: 400,
            result: e
          });
          await prisma.$disconnect();
        });
    }
  }
}
