import { Doctor } from "../../../interfaces/interfaces";
import { DoctorCard } from "../doctor_card/DoctorCard";
import Button from '@mui/material/Button';

import './DoctorList.css'

type Props = {
    doctors : Doctor[]
    setOpen : Function
    setDoctors : Function
};
export const DoctorList = (props: Props) => {
    
    function deleteDoctor(patientId : string) {
        let doctorListTemp = [...props.doctors]
        let index = doctorListTemp.findIndex(doctor =>  doctor.id === patientId)
        doctorListTemp.splice(index, 1);
        props.setDoctors(doctorListTemp)
    }

    return (
        <div>
            <Button sx = {{marginTop : 10}} onClick={() => {props.setOpen(true);}}>Add Doctor</Button>
            <div className="doctors-list" >
                
                <h1>doctors</h1>
                <div className="doctors-list-container">
                    {
                        props.doctors.map(doctor => <DoctorCard doctor={doctor} deletePatient={deleteDoctor} />)
                    }
                </div>
            </div>
        </div>
    );
};


