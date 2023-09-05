import React, { useEffect, useState } from "react";
import '../CSS/zgjedhjetqendrore.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function CandidateCard({ candidate, onVote }) {
  console.log("----", candidate)
  const { id } = useParams();
  console.log('ID:', id);
  const{qendroreId} = useParams();
  const [voted, setVoted] = useState(false);

  const handleVote = async (candidateId, electionId, party_id, userId) => {
    if (voted) {
      return;
    }
    try {
      const userId = id;
      // Send a POST request to the /voter API endpoint
      await axios.post(`http://localhost:5000/vote/centralVotes/${id}`, {
        election_id: qendroreId,
        party_id: party_id,
        candidate_id: candidate._id,
      });

      // Update the UI to show that the user has voted
      setVoted(true);
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <Card sx={{ maxWidth: 300 }} className='candidatewrapper'>
      {/* ... (other code) */}
      <CardActions>
        <div className='card-actions'>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => {
              handleVote(candidate.user_id, candidate.election_id, candidate.party_id, candidate._id);
              onVote(candidate._id, candidate.party_id);
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
  const { id } = useParams();
  console.log('ID:', id);
  const [candidates, setCandidates] = useState([]);
  const [voted, setVoted] = useState(false); // Define voted here

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection");
      const kandidatdata = await response.json();
      const resData = kandidatdata.data.map((el) => {
        const id = kandidatdata.party.find((e) => (e.name === el.party))
        return { ...el, party_id: id?._id }
      })
      setCandidates(resData);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchKandidatData();
  }, []);

  const handleVote = async (candidateId, partyId) => {
    if (voted) {
      return;
    }
    
    try {
      const userId = id;
      // Send a POST request to your API to record the vote
      await axios.post("YOUR_API_ENDPOINT_HERE", {
        userId,
        candidateId,
        partyId,
        electionId: qendroreId, // Define qendroreId here
      });
  
      // Update the UI to show that the user has voted
      setVoted(true);
  
      // Log the updated vote count for the candidate
      const updatedCandidate = candidates.find((candidate) => candidate._id === candidateId);
      if (updatedCandidate) {
        console.log(`Vote submitted successfully for ${updatedCandidate.name} ${updatedCandidate.surname}. New vote count: ${updatedCandidate.votes + 1}`);
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };
  
  return (
    <Grid container spacing={1} style={{ marginLeft: 100, marginTop: 100, marginBottom: 100, backgroundColor:'#fff176' }}>
      {candidates.map((el) => (
        <CandidateCard key={el._id} candidate={el} onVote={handleVote} />
      ))}
    </Grid>
  );
};

export default Zgjedhjetqendrore;

