import axios from 'axios';
import { Doctor } from '../interfaces/interfaces';
const headers = {
    'X-RapidAPI-Key': 'your-rapid-key',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
}


export class DoctorService {

    async getAllDoctors(){
        try {
            const allDoctors : Doctor[] = (await axios.get('manager/doctorsList', {headers : headers})).data
            if (!allDoctors) {
                throw(new Error('cant load doctors'))
            }
            return allDoctors
        } catch (error) {
            throw(error)
        }
    }


    async createDoctor(newDoctor : Doctor){
        try {
            await axios.post(`manager/addDoctor`,newDoctor , {headers : headers})
        } catch (error) {
            throw(error)
        }
    }
}


