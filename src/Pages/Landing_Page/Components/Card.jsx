import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import '../CSS/Card.css';
import rate from '../../../Images/rate.png'

export default function MediaCard(props) {
    let show = props.item.rating;
    return (
        <Card sx={{ maxWidth: 345, p: 4 }} className='Card'>
            <Typography className='Card_Title' gutterBottom variant="h5">
                {props.item.title}
            </Typography>
            <CardMedia
                sx={{ height: 140 }}
                image={props.item.img}
                title={props.item.imgTitle}
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} >
                {show && <img src={rate}/>}
            </div>

            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography style={{ textDecoration: 'line-through' }} variant="h6" color="rgba(144, 152, 177, 1)">
                    {props.item.discountPrice}
                </Typography>
                <Typography mr={5} variant="h6" color="rgba(251, 113, 129, 1)">
                    {props.item.discountPercentage}
                </Typography>
                <Typography mt={2} variant="h6" color="rgba(64, 191, 255, 1)">
                    {props.item.price}
                </Typography>
            </CardContent>
        </Card>
    );
}