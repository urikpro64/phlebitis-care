export type Phlebitis = {
  id: string,
  hn: string,
  an: string,
  grade: number,
  date: number,
  userId: string
}

export type Result = {
  grade: number,
  date: number,
  nursecare: string,
}

export type Results = {
  id: number,
  hn: string,
  an: string,
  result: Result[],
}
