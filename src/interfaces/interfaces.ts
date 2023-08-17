

export interface Medicine {   
    name : string
    description : string
    time : Number
    patientId : string
}

export interface Doctor {
    id : string
    name : string
    email : string
    password : string
    phoneNumber : string
    patients  : Patient[]
}

export interface Patient {
    id : string  
    name : string
    personal_id : string
    medications :   Medicine[]
    doctorId : string
}