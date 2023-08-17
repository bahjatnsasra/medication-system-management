// @flow 
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Doctor } from '../../interfaces/interfaces';
import { DoctorService } from '../../service/doctor_service';
const doctorService = new DoctorService()

type Props = {
    addDoctor : Function
    setOpen : Function
    open : boolean
};
export const DoctorForm = (props: Props) => {
    const [doctorName , setDoctorName ] = useState<string>('')
    const [email , setEmail ] = useState<string>('')
    const [phoneNumeber , setPhoneNumeber ] = useState<string>('')
    const [password , setPassword ] = useState<string>('')

    const handleAdd = async () => {
        const newMDoctor : Doctor = {
            name: doctorName,
            email: email,
            phoneNumber: phoneNumeber,
            password: password,
            patients: [],
            id: ''
        }
        await doctorService.createDoctor(newMDoctor)
        props.addDoctor(newMDoctor)
        props.setOpen(false);
    }
    

    const handleClose = () => {
        props.setOpen(false);
    };
    
    return (
        <Dialog open={props.open} onClose={() => {handleClose()}}>
            <DialogTitle>Add Doctor</DialogTitle>
            <DialogContent>
                <TextField onChange={(e) => {setDoctorName(e.target.value)}}  autoFocus  margin="dense" label="Name" type="text" fullWidth variant="standard" />
                <TextField onChange={(e) => {setEmail(e.target.value)}}   margin="dense"  label="Email" type="email" fullWidth variant="standard" />
                <TextField onChange={(e) => {setPassword(e.target.value)}}   margin="dense"  label="Password" type="password" fullWidth variant="standard" />
                <TextField onChange={(e) => {setPhoneNumeber(e.target.value)}}   margin="dense"  label="Phone Number" type="text" fullWidth variant="standard" />
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