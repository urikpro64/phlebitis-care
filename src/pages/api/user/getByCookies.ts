import { getSession, getUserByCookies } from '@/pages/api/lib/sessionUser';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const cookies = request.headers.cookie;
  
  if (cookies) {
    const user = await getUserByCookies(cookies);
    if (user) {
      response.status(200).json(user);
    }
    else {
      response.status(404).json({
        result: "User not found.",
      });
    }
  }
  else {
    response.status(404).json({
      result: "Cookies not found."
    });
  }
}
