import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {
  
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Patient Follow-up
          <span className="text-indigo-700 ml-3">Veterinary</span>
        </h1>  

        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default App
