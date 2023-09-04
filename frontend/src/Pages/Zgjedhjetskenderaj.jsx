import React from 'react'
import '../CSS/zgjedhjet.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material'; 
import { useState, useEffect } from 'react';
  
function CandidateCard({candidate}) { 
    return (
      <Card sx={{ maxWidth: 300 }} className='candidatewrapper'>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${candidate.name} ${candidate.surname}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${candidate.party}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className='card-actions'>
            <Button
              size="small"
              color="primary"
              variant="contained"
              // onClick={() => onVote(candidate._id)}
            >
              Voto
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
  
function Zgjedhjetskenderaj() {
  const [candidate, setCandidates] = useState([]);

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyCityskdr");
      const kandidatdata = await response.json();
      setCandidates(kandidatdata.data);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchKandidatData();
  }, []);
  return (
    <div className="candidates">
      <h3>Kandidatet per Komunen e Skenderajit!</h3>
      <Grid container spacing={1} style={{marginLeft:100, marginTop:100, marginBottom:100}}>
        {candidate.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </Grid>
    </div>
  )
}

export default Zgjedhjetskenderaj;