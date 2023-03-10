import { Patient } from '@/pages/api/patient/types';
import { Phlebitis } from '@/pages/api/phlebitis/types';

export type DashboardGrade = Phlebitis & {
  patient: Patient
}
