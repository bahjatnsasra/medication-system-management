import axios from 'axios';
import { Patient } from '../interfaces/interfaces';
const headers = {
    'X-RapidAPI-Key': 'your-rapid-key',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
}

export class PatientService {
    async getDoctorPatients(doctorId : string){
        try {
            const doctorPatients : Patient[] = (await axios.get(
                `${doctorId}/patientsList`,
                {
                    headers : headers
                }
            )).data
            if (!doctorPatients) { throw(new Error('cannot get patients')) }
            return doctorPatients
        } catch (error) {
            throw(error)
        }
    }


    async deletePatient(patienId: string) {
        try {
            await axios.delete(`manager/deletePatient/${patienId}`, {headers : headers})
        } catch (error) {
            throw(error)
        }
    }

    async getAllPatients(){
        try {
            const allPatients : Patient[] = (await axios.get('manager/patients', {headers : headers})).data
            if (!allPatients) {
                throw(new Error('cant load patients'))
            }
            return allPatients
        } catch (error) {
            throw(error)
        }
    }


    async createPatient(newPatient : Patient){
        try {
            await axios.post(`manager/addPatient`,newPatient , {headers : headers})
        } catch (error) {
            throw(error)
        }
    }
}