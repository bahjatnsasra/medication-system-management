// @flow 
import * as React from 'react';
import { useEffect ,  useState  } from 'react';
import { PatientService } from '../../service/patient_service';
import { Patient } from '../../interfaces/interfaces';
import { PatientList } from '../patient_components/patient_list/PatientList';
import { useLocation } from 'react-router-dom';
const patientService = new PatientService()

type Props = {
    
};
export const DoctorPatientList = (props: Props) => {
    const [patients,setPatients] = useState<Patient[]>([])
    const doctorId = useLocation().state.doctorId
    const [open, setOpen] = useState(false);

    
    useEffect(() => {
        const fetchData = async () => {
            const data = await patientService.getDoctorPatients(doctorId || '64da2cf214590e9a86ec4b1d')
            setPatients(data)
        }
        fetchData()
    },[])
    
    return (
        <div>
            <PatientList patients={patients} setPatients={setPatients} setOpen={setOpen}/>
        </div>
    );
};