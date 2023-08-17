import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import './PatientCard.css'
import { MedicineList } from '../../medicine_components/medicine_list/MedicineList'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Medicine, Patient } from '../../../interfaces/interfaces';
import { MedicineForm } from '../../medicine_components/MedicineForm';
import { useEffect, useState } from 'react';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

type Props = {
  patient : Patient
  deletePatient : Function 
};
export const PatientCard = (props: Props) => {
  const [patientMedications , setPatientMedications ] = useState<Medicine[]>([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPatientMedications(props.patient.medications)
  },[])

  function addMedicine(medicine:Medicine) {
    let patientMedicationsTemp = [...patientMedications]
    patientMedicationsTemp.push(medicine)
    setPatientMedications(patientMedicationsTemp)
  }

  return (
    <div>
      
      <Card className='patient-card-container'>
        <CardContent>
          <CardActionArea sx = {{width : 40 , marginLeft : 30}}>
            <CardActions onClick={() => {props.deletePatient(props.patient.id)} }>
              <PersonRemoveIcon/>
            </CardActions>
          </CardActionArea>
          <Typography variant="h5" component="div">
            {`name:  ${props.patient.name}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`id: ${props.patient.personal_id}`}
          </Typography>
          <MedicineList medications={patientMedications} />
        </CardContent>
        
        <CardActionArea>
        <CardActions>
          <LocalHospitalIcon onClick={() => {setOpen(true);}}/>
        </CardActions>
      </CardActionArea>
      <MedicineForm
      open={open}
      setOpen={setOpen} 
      patientId = {props.patient.id}
      addMedicine = {addMedicine}/>
      </Card>
    </div>
  );
};