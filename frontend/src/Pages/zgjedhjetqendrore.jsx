import React, { useEffect, useState } from "react";
import '../CSS/zgjedhjetqendrore.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function CandidateCard({candidate, party}) { 
  const { id, qendroreId } = useParams();
  const navigate = useNavigate();
  const [voted, setVoted] = useState(false);

  const handleVote = async (candidateId, electionId, party_id, userId) => {
    if (voted) {
      return;
    }
    try {
      await axios.post(`http://localhost:5000/vote/centralVotes/${id}`, {
        election_id: qendroreId,
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
            {`${party}`}
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

function Zgjedhjetqendrore() {
  const [candidates, setCandidates] = useState([]);
  const [voteData, setVoteData] = useState({}); 

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection");
      const kandidatdata = await response.json();
      const resData = kandidatdata.data.map((el) => {
        const id = kandidatdata.party.find((e) => (e.name === el.party));
        return { ...el, party_id: id?._id };
      });
      setCandidates(resData);

      const counts = {};
      resData.forEach((el) => {
        counts[el.party] = el.voteCount || 0; 
      });
      setVoteData(counts);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchKandidatData();
  }, []);

  return (
    <>
      <Grid container spacing={1} style={{ marginLeft: 400, marginTop: 200, marginBottom: 100 }}>
        {candidates.map((el) => (
          <CandidateCard key={el._id} candidate={el} party={el.party} voteData={voteData} setVoteData={setVoteData} />
        ))}
      </Grid>
    </>
  );
}
export default Zgjedhjetqendrore;