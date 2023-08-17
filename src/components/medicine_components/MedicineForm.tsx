// @flow 
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useState } from 'react';
import { Medicine } from '../../interfaces/interfaces';
import { MedicineService } from '../../service/medicine_service';
const medicineService = new MedicineService()

type Props = {
    addMedicine : Function
    patientId : string
    setOpen : Function
    open : boolean
};
export const MedicineForm = (props: Props) => {
    const [medicineName , setMedicineName ] = useState<string>('')
    const [medicineDescription , setMedicineDescription ] = useState<string>('')
    const [medicineHour , setMedicineHour ] = useState<number>(0)

    const handleAdd = async () => {
        const newMedicine : Medicine = {
            name: medicineName,
            description: medicineDescription,
            time: medicineHour,
            patientId: props.patientId,
        }
        await medicineService.createMedicine(newMedicine)
        props.addMedicine(newMedicine)
        props.setOpen(false);
    }
    

    const handleClose = () => {
        props.setOpen(false);
    };
    
    return (
        <Dialog open={props.open} onClose={() => {handleClose()}}>
            <DialogTitle>Add Medicine</DialogTitle>
            <DialogContent>
                <TextField onChange={(e) => {setMedicineName(e.target.value)}}  autoFocus  margin="dense"  id="medicine-name" label="Medicine Name" type="text" fullWidth variant="standard" />
                <TextField onChange={(e) => {setMedicineDescription(e.target.value)}}   margin="dense"  id="medicine-desription" label="Description" type="text" fullWidth variant="standard" />
                <TextField onChange={(e) => {setMedicineHour(Number(e.target.value))}} InputProps={{ inputProps: { min: 0, max: 12 } }}  margin="dense"  id="medicine-timeout" label="Hours"  type="number" variant="standard" />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {handleClose()}} color="primary">
                Cancel
                </Button>
                <Button onClick={() => {handleAdd()}} color="primary">
                Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};