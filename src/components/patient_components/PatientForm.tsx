// @flow 
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Patient } from '../../interfaces/interfaces';
import { PatientService } from '../../service/patient_service';
const patientService = new PatientService()

type Props = {
    addPatient : Function
    setOpen : Function
    open : boolean
};
export const PatientForm = (props: Props) => {
    const [patientName , setPatientName ] = useState<string>('')
    const [personalId , setPersonalId ] = useState<string>('')

    const handleAdd = async () => {
        const newPatient : Patient = {
            id: '',
            name: patientName,
            personal_id: personalId,
            medications: [],
            doctorId: '64da2cf214590e9a86ec4b1d'
        }
        await patientService.createPatient(newPatient)
        props.addPatient(newPatient)
        props.setOpen(false);
    }
    

    const handleClose = () => {
        props.setOpen(false);
    };
    
    return (
        <Dialog open={props.open} onClose={() => {handleClose()}}>
            <DialogTitle>Add Patient</DialogTitle>
            <DialogContent>
                <TextField onChange={(e) => {setPatientName(e.target.value)}}  autoFocus  margin="dense" label="Name" type="text" fullWidth variant="standard" />
                <TextField onChange={(e) => {setPersonalId(e.target.value)}}   margin="dense"  label="Personal Id" type="text" fullWidth variant="standard" />
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