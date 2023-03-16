import { getCookie, hasCookie } from '@/pages/api/lib/cookie-repo';
import { prisma } from '@/pages/api/lib/prisma';
import { User } from '@/pages/api/user/types';

export const hasSession = (cookies: string) => {
  return hasCookie(cookies,"session");
}

export const getSession = (cookies: string) => {
  console.log("cookies:",cookies);
  return getCookie(cookies, "session");
}

export const getUserBySession = async (session: string):Promise<User | null> => {
  let user: User = await prisma.session.findUnique({
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
  }).then((data:any) => data?.user);
  if (!user) {
    return null;
  }
  return user;
}

export const getUserByCookies = async (cookies: string):Promise<User | null> => {
  if (!hasSession(cookies)) {
    return null;
  }
  const session = getSession(cookies);
  const user = await getUserBySession(session);
  return user;
}
