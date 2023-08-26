import React from 'react'
import '../CSS/zgjedhjet.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ak from '../img/ak.jpg';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material'; 
import CardMedia from '@mui/material/CardMedia';

const candidates = [
    {
      id: 1,
      name: 'Albin',
      surname: 'Kurti',
      imageSrc: ak,
      description: 'Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves.',
    },
    {
        id: 1,
        name: "Albin",
        surname: "Kurti",
        imageSrc: "../img/ak.jpg",
        description: "Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves.",
    },
    {
        id: 1,
        name: "Albin",
        surname: "Kurti",
        imageSrc: "../img/ak.jpg",
        description: "Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves.",
      },
      
    // Add more candidate data here...
];

  
function CandidateCard() {
    return (
          <Card sx={{ maxWidth: 300 }} className='candidatewrapper'>
              <CardActionArea>
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

function Zgjedhjetlokalemtrv() {
  return (
    <div className="candidate-prishtine">
      <h3>Kandidatet per Komunen e Mintrovices!</h3>
      <Grid container spacing={1} style={{marginLeft:100, marginTop:100, marginBottom:100}}>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </Grid>
    </div>
  )
}

export default Zgjedhjetlokalemtrv