// @flow 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MedicineCard.css'
import { Medicine } from '../../../interfaces/interfaces';


type Props = {
    medicine : Medicine
};
export const MedicineCard = (props: Props) => {
    return (
        <Card className='medicine-card-container'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.medicine.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};