import { prisma } from '@/pages/api/lib/prisma';
import { LoginData, UserData } from '@/pages/api/user/types';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "POST") {
    const { body } = request;
    const loginData: LoginData = body;
    console.log(loginData);
    const userData: UserData | null = await prisma.user.findUnique({
      where: {
        email: loginData.email
      }
    });
    if (!userData) {
      response.status(404).json({
        status: 404,
        result: "Not found"
      })
    }
    else {
      bcrypt.compare(loginData.password, userData.password, async (err, res) => {
        const dateNow = new Date();
        const expired = new Date();
        expired.setDate(dateNow.getDate()+7);
        if (res) {
          const createSession = await prisma.session.create({
            data: {
              userId: userData.id,
              date: dateNow,
              expired: expired,
            }
          });
          response.setHeader('set-cookie',`session=${createSession.session}; path=/; httponly;`);
          response.status(200).json({
            status: 200,
            isCorrect: res,
            result: userData
          });
        }
        else {
          response.status(200).json({
            status: 200,
            isCorrect: res,
            result: "Password is not correct."
          });
        }
      });
    }
  }
}
