import axios from 'axios';
import { Medicine } from '../interfaces/interfaces';
const headers = {
    'X-RapidAPI-Key': 'your-rapid-key',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
}

export class MedicineService {
    
    async getMedication(patientId : string){
        try {
            const medication : Medicine = await axios.get(
                `/${patientId}/medications`,
                {
                    headers : headers
                }
            )
            if (!medication) { throw(new Error('cannot get medication')) }
            return medication
        } catch (error) {
            throw(error)
        }
    }

    async createMedicine(newMedicine : Medicine) {
        try {
            await axios({
                url : `/doctor/addMedicine`,
                method : 'POST',
                headers : headers,
                data : newMedicine
            })
        } catch (error) {
            
        }
    }
}