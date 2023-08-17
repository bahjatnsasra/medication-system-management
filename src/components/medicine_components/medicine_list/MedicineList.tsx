// @flow 
import * as React from 'react';
import { MedicineCard } from '../medicine_card/MedicineCard';
import { Medicine } from '../../../interfaces/interfaces';
type Props = {
    medications : Medicine[]
};
export const MedicineList = (props: Props) => {
    

    return (
        <div className="medications" >
            <h1>medication</h1>
            <div className="medications-container">
                {
                    props.medications.map(medicine => <MedicineCard medicine={medicine} />)
                }
            </div>
        </div>
    );
};