import { Patient } from '@/pages/api/patient/types'

export type OperationRequest = {
  date:string,
  mfd:string,
  position:string,
}

export type OperationResponse = {
  id:string,
  hn:string,
  an:string,
  date:Date,
  mfd:string,
  position:string,
  exp:Date,
  userId: string
  patient:Patient
}
