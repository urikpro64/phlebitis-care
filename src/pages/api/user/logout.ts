import { prisma } from '@/pages/api/lib/prisma';
import { getSession, hasSession } from '@/pages/api/lib/sessionUser';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const cookies = request.headers.cookie;
  if(!cookies){
    response.status(400).json({
      isLogout:false,
      Error: "Cannot found cookies."
    })
    return
  }
  
  if(!hasSession(cookies)){
    response.status(400).json({
      status: 2050,
      isLogout:false,
      Error: "Cannot found session."
    })
    return
  }

  const session = getSession(cookies);
  try {
    response.setHeader("set-cookie", `session=deleted; path=/; Max-Age=0; httponly;`);
    const deleteSession = await prisma.session.delete({
      where: {
        session: session
      }
    });
  } catch (e) {
    console.log("Logout:", e);
    
    response.status(400).json({
      isLogout:false,
      Error: e
    })
  } finally {
    response.status(200).json({
      isLogout:true
    })
  }
}
