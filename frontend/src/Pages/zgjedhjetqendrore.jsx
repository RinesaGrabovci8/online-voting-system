import React, { useEffect, useState } from "react";
import '../CSS/zgjedhjetqendrore.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Chart from "./Grafiket";

function CandidateCard({candidate}) { 
  console.log("----", candidate)
  const { id } = useParams();
  console.log('ID:', id);
  const{qendroreId} = useParams();
  const [voted, setVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(() => {
    const storedVoteCount = localStorage.getItem(`voteCount_${candidate._id}`);
    return storedVoteCount ? parseInt(storedVoteCount, 10) : 0;
  });
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();



  const handleVote = async (candidateId,electionId, party_id, userId) => {
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

      setVoted(true);

    // Update the vote count based on the previous value
      setVoteCount(prevVoteCount => prevVoteCount + 1);

    // Mark the user as having voted in local storage
      localStorage.setItem(`voted_${candidate._id}`, "true");

    // Store the updated vote count in local storage
     localStorage.setItem(`voteCount_${candidate._id}`, (voteCount + 1).toString());

    // Log the updated vote count
      console.log(`Vote count for ${candidate.name} ${candidate.surname}: ${voteCount + 1}`);

      navigate("/charts");
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };
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
          <Typography variant="body2" color="text.secondary">
            Vote: {voteCount}
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
              handleVote(candidate.user_id,candidate.election_id, candidate.party_id, candidate._id)}}
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
  const [candidate, setCandidates] = useState([]);
  const [voteCounts, setVoteCounts] = useState({});

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection");
      const kandidatdata = await response.json();
      const resData = kandidatdata.data.map((el) => {
        const id = kandidatdata.party.find((e) => (e.name === el.party))
        return { ...el, party_id: id?._id }
      })
      setCandidates(resData);
      const counts = {};
      resData.forEach((el) => {
        counts[el.party] = counts[el.party] ? counts[el.party] + 1 : 1;
      });
      setVoteCounts(counts);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchKandidatData();
  }, []);
  return (
    <>
    <Grid container spacing={1} style={{ marginLeft: 100, marginTop: 100, marginBottom: 100, backgroundColor:'#fff176' }}>
      {candidate.map((el) => (
        <CandidateCard key={el._id} candidate={el} />
      ))}
    </Grid>
    </>
  );
};

export default Zgjedhjetqendrore;