import { Container } from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '@/public/profile.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Patient } from '@/pages/api/patient/types';
import { Spinner } from '@/components/common/Spinner';

const NewPatientPage = () => {
  const route = useRouter();
  const [patient, setPatient] = useState<Patient>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [age, setAge] = useState<number>();

  useEffect(() => {
    fetch("/api/patient/get", {
      method: "GET",
      credentials: "include"
    })
      .then(response => response.json())
      .then(response => setPatient(response))
  }, []);

  if (!patient) {
    return (
      <Container>
        <div className="h-full flex justify-center items-center">
          <Spinner className="w-10 h-10 text-white animate-spin" />
        </div>
      </Container>
    );
  }

  const NewPatient = async () => {
    if (!(firstname && lastname && age)) {
      return
    }

    const patientData: Patient = {
      firstname: firstname,
      lastname: lastname,
      hn: patient.hn,
      an: patient.an,
      age: age
    }

    const submitResult = await fetch("/api/patient/new", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patientData)
    })
    console.log(submitResult);

    if (submitResult.status == 200) {
      route.push("/menu");
    }
  }
  return (
    <Container>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-full p-6">
          <div className="flex flex-col items-center p-8 bg-primary rounded-lg">
            <div className="text-center text-white text-xl mb-4">ประวัติส่วนตัว</div>

            <div className="w-52 h-52 mb-8 rounded-full bg-white shadow-lg">
              <Image src={Profile} alt="" className="" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">ชื่อ</label>
                <input className="w-full px-1 rounded-md" onChange={e => setFirstname(e.currentTarget.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">นามสกุล</label>
                <input className="w-full px-1 rounded-md" onChange={e => setLastname(e.currentTarget.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">HN</label>
                <input className="w-full px-1 rounded-md" value={patient.hn} readOnly />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">AN</label>
                <input className="w-full px-1 rounded-md" value={patient.an} readOnly />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white font-light mb-1">อายุ</label>
                <input className="w-full px-1 rounded-md" type="number" onChange={e => setAge(+e.currentTarget.value)} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Link href="/welcome" className="px-4 py-2 text-white bg-primary rounded-lg">
            ย้อนกลับ
          </Link>
          <button className="px-4 py-2 text-white bg-primary rounded-lg" onClick={e => NewPatient()}>
            ถัดไป
          </button>


        </div>
      </div>
    </Container>
  );
};

export default NewPatientPage;
