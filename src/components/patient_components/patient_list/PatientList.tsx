import { Patient } from "../../../interfaces/interfaces";
import { PatientCard } from "../patient_card/PatientCard";
import Button from '@mui/material/Button';

import './PatientList.css'

type Props = {
    patients : Patient[]
    setPatients : Function 
    setOpen : Function 
};
export const PatientList = (props: Props) => {
    function deletePatient(patientId : string) {
        let patientListTemp = [...props.patients]
        let index = patientListTemp.findIndex(patient =>  patient.id == patientId)
        patientListTemp.splice(index, 1);
        props.setPatients(patientListTemp)
    }
    return (
        <div>
            <Button sx = {{marginTop : 10}} onClick={() => {props.setOpen(true);}}>Add Patient</Button>
            <div className="patients-list">
                <h1>patients</h1>
                <div className="patients-list-container">
                    {
                        props.patients.map(patient => <PatientCard patient={patient} deletePatient={deletePatient} />)
                    }
                </div>
            </div>

        </div>
    );
};