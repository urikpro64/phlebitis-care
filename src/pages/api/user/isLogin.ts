import { getCookie, hasCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { hasSession } from '@/pages/api/lib/sessionUser';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const cookies = request.headers.cookie;
  if (!cookies) {
    response.status(200).json({
      isLogin: false
    });
    return;
  }
  
  if (!hasSession(cookies)) {
    response.status(200).json({
      isLogin: false
    });
    return;
  }

  const session = await prisma.session.findFirst({
    where: {
      session: getCookie(cookies, "session")
    }
  });
  if (session) {
    response.status(200).json({
      isLogin: true
    });
  }
  else {
    response.status(200).json({
      isLogin: false
    });
  }
}
