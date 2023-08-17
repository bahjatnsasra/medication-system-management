// @flow 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
type Props = {
    cardText : string
};
export const SimpleCard = (props: Props) => {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.cardText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};