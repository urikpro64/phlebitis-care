import { getCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { Patient, PatientRequest } from '@/pages/api/patient/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const cookies = request.headers.cookie;
  if (!cookies) {
    response.status(404).json({
      result:"Cookie not found."
    });
  }
  else {
    const patientRequest: PatientRequest = {
      hn: getCookie(cookies, "hn"),
      an: getCookie(cookies, "an")
    }

    const patient:Patient | null = await prisma.patient.findUnique({
      where: {
        hn_an: {
          hn: patientRequest.hn,
          an: patientRequest.an
        }
      }
    });

    if(!patient) {
      response.status(404).json({
        hn: patientRequest.hn,
        an: patientRequest.an
      });
    }
    else {
      response.status(200).json(patient);
    }
  }
}
