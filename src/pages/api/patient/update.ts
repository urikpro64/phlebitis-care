import { prisma } from '@/pages/api/lib/prisma';
import { Patient } from '@/pages/api/patient/types';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { body } = request;
  const patientData: Patient = body;
  console.log(patientData);
  const patient: Prisma.PatientCreateInput = patientData;
  const createPatient = await prisma.patient.update({
    where:{
      hn_an:{
        hn:patient.hn,
        an:patient.an
      }
    },
    data: patient
  })
    .then(async () => {
      response.status(200).json({
        status: 200,
        result: "Create patient success."
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
