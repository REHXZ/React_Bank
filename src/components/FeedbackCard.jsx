import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'; // Import Grid from Material-UI
import styles from '../style';

export default function ActionAreaCard() {
  const cardData = [
    {
      title: 'Lizard 1',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'src/assets/airbnb.png',
    },
    {
      title: 'Lizard 2',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'src/assets/airbnb.png',
    },
    {
      title: 'Lizard 3',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'src/assets/png-transparent-logo-contracting-photography-logo-symbol-removebg-preview.png',
    },
  ];

  return (
    <Grid container spacing={5} className={`${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}> {/* Container for the cards, centered horizontally */}
      {cardData.map((card, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}> {/* Adjust xs, sm, md values based on your layout requirements */}
          <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(0, 0, 0, 0.2)', textAlign: 'center'  }}>
            {/* Card content */}
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
