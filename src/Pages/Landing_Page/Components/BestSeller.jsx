import React from "react";
import { Card, CardMedia, Box, Typography, ButtonGroup, Button } from '@mui/material';
import '../CSS/BestSeller.css';


export default function BestSeller() {
    return (
        <Box>
            <Typography style={{ textAlign: 'center' }} mt={5} variant="h4">BEST SELLER</Typography>
            <ButtonGroup className="Seller_Button_Group" color="inherit" size="large" variant="text">
                <Button className="Seller_Button" style={{ border: '0', fontSize: '1.4rem' }}>All</Button>
                <Button className="Seller_Button" style={{ border: '0', fontSize: '1.4rem' }}>Bags</Button>
                <Button className="Seller_Button" style={{ border: '0', fontSize: '1.4rem' }}>Sneakers</Button>
                <Button className="Seller_Button" style={{ border: '0', fontSize: '1.4rem' }}>Belt</Button>
                <Button className="Seller_Button" style={{ border: '0', fontSize: '1.4rem' }}>Sunglasses</Button>
            </ButtonGroup>
        </Box>
    )
}

/*
            <div style={{ gap: '3rem', display: 'flex', justifyContent: 'center' }} color="inherit" size="large" variant="text">
                <Typography className="Seller_Button" style={{ border: '0', fontSize: '1.5rem' }}>All</Typography>
                <Typography className="Seller_Button" style={{ border: '0', fontSize: '1.5rem' }}>Bags</Typography>
                <Typography className="Seller_Button" style={{ border: '0', fontSize: '1.5rem' }}>Sneakers</Typography>
                <Typography className="Seller_Button" style={{ border: '0', fontSize: '1.5rem' }}>Belt</Typography>
                <Typography className="Seller_Button" style={{ border: '0', fontSize: '1.5rem' }}>Sunglasses</Typography>
            </div>
*/