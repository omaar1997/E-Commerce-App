import React from "react";
import { Card, CardMedia, Box } from '@mui/material';
import PromoImg from '../../../Images/Promotion Image.png';
import '../CSS/Hero.css';
import MediaCard from "./Card";
import data from '../Components/HeroCardData'

export default function Hero() {
    const cardData = data.map(item => 
        <MediaCard 
        key={item.id} 
        item={item} 
        />)
    return (
        <Box>
            <Card elevation={0} className="Card_Body">
                <CardMedia image={PromoImg} className="Card_Image" />
                <div className="Card_Text">
                    Super Flash Sale 50% Off
                </div>
            </Card>
            <Box sx={{ mt: -5, gap: 20 }} className="CardGroupBox">
                {cardData}
            </Box>
        </Box>
    )

}
