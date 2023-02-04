import { prisma } from '@/pages/api/lib/prisma';
import { RegisterData } from '@/pages/api/user/types';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "POST") {
    const { body } = request;
    const registerData: RegisterData = body;
    
    let user: Prisma.UserCreateInput = {
      firstname: registerData.firstname,
      lastname: registerData.lastname,
      email: registerData.email,
      password: await bcrypt.hash(registerData.password, 10)
    };
    console.log(registerData);
    const createUser = await prisma.user.create({ data: user })
      .then(async () => {
        response.status(200).json({
          status: 200,
          result: "Register Success."
        });
        await prisma.$disconnect();
      })
      .catch(async (e: PrismaClientKnownRequestError) => {
        if (e.code === 'P2002') {
          console.log(e.meta);
          response.status(400).json({
            status: 400,
            result: "This email is already registered."
          });
        }
        else console.log(e.code);
        await prisma.$disconnect();
      });
  }
}
