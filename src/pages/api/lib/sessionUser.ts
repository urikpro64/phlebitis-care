import { prisma } from '@/pages/api/lib/prisma';
import { User } from '@/pages/api/user/types';

const hasSession = (cookies: string) => {
  return cookies.includes("session=");
}

export const getSession = (cookies: string) => {
  const cookiesList = cookies.split("session=");
  const session = cookiesList[1].split(" ")[0];
  return session;
}

export const getUserBySession = async (session: string) => {
  let user:User | undefined = await prisma.session.findUnique({
    where: {
      session: session
    },
    include: {
      user: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          email: true
        }
      }
    }
  }).then(data => data?.user);
  if(!user){
    return {};
  }
  return user;
}

export const getUserByCookies = async (cookies:string) => {
  if(!hasSession(cookies)){
    return {};
  }
  const session = getSession(cookies);
  const user = await getUserBySession(session);
  return user;
}
