import React, { useEffect, useState } from "react";
import '../CSS/zgjedhjetqendrore.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from 'axios'; 

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
          >
            Voto
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

function Zgjedhjetqendrore() {
  const [candidate, setCandidates] = useState([]);

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection");
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
    <Grid container spacing={1} style={{ marginLeft: 100, marginTop: 100, marginBottom: 100, backgroundColor:'#fff176' }}>
      {candidate.map((candidate) => (
        <CandidateCard key={candidate._id} candidate={candidate} />
      ))}
    </Grid>
  );
};

export default Zgjedhjetqendrore;