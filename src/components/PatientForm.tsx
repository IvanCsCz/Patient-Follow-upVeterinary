import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { usePatientStore } from "../store/store"
import { DrafPatient } from "../types"
import ErrorMsg from "./ErrorMsg"

function PatientForm() {
  const { patients, activeId, addPatient, updatePatient } = usePatientStore()
  const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DrafPatient>()

  useEffect(() => {
    if(activeId){
      const activePatient = patients.filter(patient => patient.id === activeId)[0]
      setValue('name', activePatient.name)
      setValue('caretaker', activePatient.caretaker)
      setValue('date', activePatient.date)
      setValue('email', activePatient.email)
      setValue('symptoms', activePatient.symptoms)
    }
  },[activeId])
  
  const registerPatient = (data: DrafPatient) => {
    if(activeId){
      updatePatient(data)
    } else {
      addPatient(data)
    }

    reset()
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and
        <span className="text-indigo-600 font-bold ml-2">Manage Them</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient 
          </label>
          <input  
            id="name"
            className={`w-full p-3  border border-gray-100 ${errors.name && 'border-red-600'}`}  
            type="text" 
            placeholder="Patient's Name" 
            {...register('name', {
              required: "Patient's name is required"
            })}
          />
          {errors.name && (
            <ErrorMsg> 
              {errors.name?.message}
            </ErrorMsg>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Caretaker 
          </label>
          <input  
            id="caretaker"
            className="w-full p-3  border border-gray-100"  
            type="text" 
            placeholder="Caretaker's Name" 
            {...register('caretaker', {
              required: "Caretaker's name is required"
            })}
          />
          {errors.caretaker && (
            <ErrorMsg> 
              {errors.caretaker?.message}
            </ErrorMsg>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email 
          </label>
          <input  
            id="email"
            className="w-full p-3  border border-gray-100"  
            type="email" 
            placeholder="name@example.com" 
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email'
              }
            })} 
          />
          {errors.email && (
            <ErrorMsg> 
              {errors.email?.message}
            </ErrorMsg>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Registration Date
          </label>
          <input  
            id="date"
            className="w-full p-3  border border-gray-100"  
            type="date" 
            {...register('date', {
              required: "Date of Registration is required"
            })}
          />
          {errors.date && (
            <ErrorMsg> 
              {errors.date?.message}
            </ErrorMsg>
          )}
        </div>
          
        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas 
          </label>
          <textarea  
            id="symptoms"
            className="w-full p-3  border border-gray-100"  
            placeholder="Symptoms" 
            {...register('symptoms', {
              required: "Symptoms are required"
            })}
          />
          {errors.symptoms && (
            <ErrorMsg> 
              {errors.symptoms?.message}
            </ErrorMsg>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value={activeId ? 'Update Patient' : 'Register Patient'}
        />
      </form> 
    </div>
  )
}

export default PatientForm