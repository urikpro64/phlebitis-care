export const getCookie = (cookies: string, cookie:string) => {
  const cookiesList = cookies.split(`${cookie}=`);
  const result = cookiesList[1].split(";")[0];
  return result;
}
