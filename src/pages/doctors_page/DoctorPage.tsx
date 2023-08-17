// @flow 
import { DoctorList } from '../../components/doctor_components/doctor_list/DoctorList';
import { useState , useEffect } from 'react';
import { Doctor } from '../../interfaces/interfaces';
import { DoctorService } from '../../service/doctor_service';
import { DoctorForm } from '../../components/doctor_components/MedicineForm';
const doctorService = new DoctorService()
type Props = {
    
};
export const DoctorPage = (props: Props) => {

    const [doctors,setDoctors] = useState<Doctor[]>([])
    const [open, setOpen] = useState(false);

    function addDoctor(doctor:Doctor) {
        let DoctorListTemp = [...doctors]
        DoctorListTemp.push(doctor)
        setDoctors(DoctorListTemp)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await doctorService.getAllDoctors()
            setDoctors(data)
        }
        fetchData()
    },[])

    return (
        <div>
            <DoctorForm addDoctor={addDoctor} setOpen={setOpen} open={open} />
            <DoctorList setOpen={setOpen} doctors={doctors} setDoctors={setDoctors}/>
        </div>
    );
};