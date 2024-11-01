import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
  patient: Patient
}

function PatientDetails({patient}: PatientDetailsProps) {
  const {deletePatient, getPatientById} = usePatientStore()

  const handleDelete = () => {
    deletePatient(patient.id)
    toast.error('Patient deleted')
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Name" data={patient.name} />
      <PatientDetailsItem label="Caretaker" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Registration Date" data={patient.date.toString()} />
      <PatientDetailsItem label="Symptoms" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button onClick={() => getPatientById(patient.id)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg">
          Edit
        </button>

        <button onClick={handleDelete} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
          Delete
        </button>
      </div>
    </div>
  )
}

export default PatientDetails