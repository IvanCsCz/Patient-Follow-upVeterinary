import { usePatientStore } from "../store/store"

function PatientList() {
  const { patients } = usePatientStore()

  // console.log(patients)

  return (
    <div>PatientList</div>
  )
}

export default PatientList