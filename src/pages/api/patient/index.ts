import { PatientRequest } from '@/pages/api/patient/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { body } = request;
  if (request.method == "POST") {

    const patientRequest: PatientRequest = body;

    response.setHeader('set-cookie', [
      `hn=${patientRequest.hn}; path=/; httponly;`,
      `an=${patientRequest.an}; path=/; httponly;`
    ]);

    response.status(200).json({
      status: 200,
      isSelectPatient: true
    })
  }
  else {
    response.status(404).json({
      status: 404,
      isSelectPatient: false
    })
  }
}
