import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { getRandomInt } from '../Utils';

function UserCard(props) {
    const { userData, idx } = props;
    const [fontColor, setFontColor] = useState(null);

    useEffect(()=>{
        const changeFontColor = () => {
            setFontColor(`rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`)
        }

        setInterval(changeFontColor, 100);
    },[])

    return <div key={idx}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={ userData.avatar }
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <h4>{ userData.jobTitle }</h4>
            </Typography>
            <Typography variant="body2" color={fontColor}>
                <h5>{ userData.name }</h5>
                {userData.email} <br />
                {userData.phoneNo}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>;
}

export default UserCard;
