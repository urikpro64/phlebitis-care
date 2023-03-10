import { getCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { getUserByCookies } from '@/pages/api/lib/sessionUser';
import { OperationRequest, OperationResponse } from '@/pages/api/operation/types';
import { User } from '@/pages/api/user/types';
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { body } = request;
  const operationRequest: OperationRequest = body;
  const cookies = request.headers.cookie;
  if (!cookies) {
    response.status(404).json({
      result: "Cookie not found."
    });
    return;
  }
  const date = new Date(operationRequest.date);
  const exp = new Date(date);
  const user: User | null = await getUserByCookies(cookies);
  if (!user) {
    response.status(404).json({
      result: "User not found."
    });
    return;
  }
  const mfdHour = operationRequest.mfd.split(":")[0];
  const mfdMinute = operationRequest.mfd.split(":")[1];
  exp.setDate(date.getDate() + 7);
  exp.setHours(+mfdHour, +mfdMinute);
  const operationResponse: Prisma.OperationCreateArgs = {
    data: {
      hn: getCookie(cookies, "hn"),
      an: getCookie(cookies, "an"),
      date: date,
      mfd: operationRequest.mfd,
      position: operationRequest.position,
      exp: exp,
      userId: user.id
    }
  }

  const createOperation = await prisma.operation.create(operationResponse)
    .then(async (result) => {
      console.log(operationRequest, result);
      response.status(200).json({
        data:result,
        isSuccess: true,
        result: "User not found."
      });
    });

  

}
