import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import ak from '../img/ak.jpg';

export default function CandidateCard() {
  return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={ak}
                alt="ak"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Albin Kurti
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Voto
                </Button>
            </CardActions>
        </Card>
  );
}