export const hasCookie = (cookies: string, cookie:string):boolean => {
  if(cookies.includes(cookie)){
    return true
  }
  return false
}

export const getCookie = (cookies: string, cookie:string) => {
  const cookiesList = cookies.split(`${cookie}=`);
  const result = cookiesList[1].split(";")[0];
  return result;
}
