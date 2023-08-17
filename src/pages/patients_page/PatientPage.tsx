// @flow 
import * as React from 'react';
import { PatientList } from '../../components/patient_components/patient_list/PatientList';
import { Patient } from '../../interfaces/interfaces';
import { PatientService } from '../../service/patient_service';
import { PatientForm } from '../../components/patient_components/PatientForm';
import { useState, useEffect } from 'react';
const patientService = new PatientService()

type Props = {
    
};
export const PatientPage = (props: Props) => {

    const [patients,setPatients] = useState<Patient[]>([])
    const [open, setOpen] = useState(false);

    function addPatient(patient:Patient) {
        let PatientListTemp = [...patients]
        PatientListTemp.push(patient)
        setPatients(PatientListTemp)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await patientService.getAllPatients()
            setPatients(data)
        }
        fetchData()
    },[])

    return (
        <div>
            <PatientForm addPatient={addPatient} setOpen={setOpen} open={open}  />
            <PatientList patients={patients} setPatients={setPatients} setOpen={setOpen}/>
        </div>
    );
};