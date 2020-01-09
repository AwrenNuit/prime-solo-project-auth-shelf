import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function(props){
    const {item} = props;

    return (
        <Card>
            <CardMedia 
                image={item.image_url}
            />
            <CardContent>
                <Typography variant='p'>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}