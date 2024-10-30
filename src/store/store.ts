import { v4 as uuidv4 } from 'uuid';
import { create } from "zustand";
import { DrafPatient, Patient } from "../types";

type PatientState = {
  patients: Patient[]
  addPatient: (data: DrafPatient) => void
}

const createPatient = (patient: DrafPatient): Patient => {
  return {...patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  }
}))