import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Doctor } from '../../../interfaces/interfaces';
import {useNavigate} from 'react-router-dom';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import './DoctorCard.css'



type Props = {
  doctor : Doctor 
  deletePatient : Function
};
export const DoctorCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Card className='doctor-card-container'>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.doctor.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.doctor.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.doctor.phoneNumber}
        </Typography>

      </CardContent>
      <CardActionArea sx = {{width : 40 , marginLeft : 1}}>
        <CardActions>
          <PersonRemoveIcon onClick={() => {props.deletePatient(props.doctor.id)}}/>
        </CardActions>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => {navigate(`/doctor/patients`,{state : {doctorId : props.doctor.id}})}} size="small">View Patients</Button>
      </CardActions>
    </Card> 
  );
};

