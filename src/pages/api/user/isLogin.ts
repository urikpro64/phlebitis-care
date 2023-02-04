import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const cookies = request.headers.cookie;
  const hasSession = cookies?.match("session");

  if (hasSession) {
    console.log("Cookies:", cookies);
    response.status(200).json({
      isLogin: true
    })
  }
  else {
    response.status(200).json({
      isLogin: false
    })
  }
}
