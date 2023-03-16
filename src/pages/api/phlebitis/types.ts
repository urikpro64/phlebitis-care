export type Phlebitis = {
  id: string | number,
  hn: string,
  an: string,
  grade: number,
  date: number | Date,
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
