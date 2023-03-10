export const hasCookie = (cookies: string|undefined, cookie:string):boolean => {
  if(!cookies){
    return false;
  }
  else if(cookies.includes(cookie) && getCookie(cookies,"session") != "deleted"){
    return true
  }
  return false
}

export const getCookie = (cookies: string, cookie:string) => {
  const cookiesList = cookies.split(`${cookie}=`);
  const result = cookiesList[1].split(";")[0];
  return result;
}
