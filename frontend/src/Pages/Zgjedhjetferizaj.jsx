import React from 'react'
import '../CSS/zgjedhjet.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material'; 
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
  
function CandidateCard({candidate, party}) { 
  const { id, lokaleId } = useParams();
  const navigate = useNavigate();
  const [voted, setVoted] = useState(false);

  const handleVote = async (candidateId, electionId, party_id, userId) => {
    if (voted) {
      return;
    }
    try {
      axios.post(`http://localhost:5000/vote/localVotes/${id}`, {
        election_id: lokaleId,
        party_id: party_id,
        candidate_id: candidate._id,
      });

      setVoted(true);
  
      navigate('/charts');
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  useEffect(() => {
    const hasVotedStorage = localStorage.getItem(`voted_${candidate._id}`);
    if (hasVotedStorage) {
      setVoted(true);
    }
  }, [candidate._id]);
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
              onClick={() => {
                handleVote(candidate.user_id, candidate.election_id, candidate.party_id);
              }}
            >
              {voted ? 'Keni Votuar' : 'Voto'}
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
  
function Zgjedhjetferizaj() {
  const [candidate, setCandidates] = useState([]);

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyCityfr");
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
      <Grid container spacing={1} style={{ marginLeft: 400, marginTop: 200, marginBottom: 100 }}>
        {candidate.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </Grid>
    </div>
  )
}

export default Zgjedhjetferizaj;