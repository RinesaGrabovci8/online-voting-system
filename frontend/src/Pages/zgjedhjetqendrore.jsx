import React, { useEffect, useState } from "react";
import '../CSS/zgjedhjetqendrore.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import PieChartPage from "../Components/PieChart";

function CandidateCard({ candidate, party, voteData, setVoteData }) { 
  const { id, qendroreId } = useParams();
  const navigate = useNavigate();
  const [voted, setVoted] = useState(false);
  const voteCount = voteData[party] || 0;

  const handleVote = async (candidateId, electionId, party_id) => {
    if (voted) {
      return;
    }
    try {
      const userId = id;

      await axios.post(`http://localhost:5000/vote/centralVotes/${id}`, {
        election_id: qendroreId,
        party_id: party_id,
        candidate_id: candidate._id,
      });

      const updatedVoteCount = voteCount + 1;
      // Update the local state first
      setVoteData(prevData => ({
        ...prevData,
        [party]: updatedVoteCount,
      }));

      // Then update the localStorage
      localStorage.setItem(`voted_${candidate._id}`, "true");
      localStorage.setItem(`voteCount_${candidate._id}`, updatedVoteCount.toString());

      // Navigate to the pie-chart page with the updated vote data
      navigate("/pie-chart", {
        state: {
          voteData: { ...voteData, [party]: updatedVoteCount },
        },
      });

      console.log(`Vote count for ${candidate.name} ${candidate.surname}: ${updatedVoteCount}`);
      setVoted(true); // Move this line after updating the vote data
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  }

  useEffect(() => {
    // Check if the user has already voted for this candidate
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
  const { id } = useParams();
  const [candidates, setCandidates] = useState([]);
  const [voteData, setVoteData] = useState({}); // Initialize with an empty object

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection");
      const kandidatdata = await response.json();
      const resData = kandidatdata.data.map((el) => {
        const id = kandidatdata.party.find((e) => (e.name === el.party));
        return { ...el, party_id: id?._id };
      });
      setCandidates(resData);

      // Initialize the voteData state with counts fetched from the server
      const counts = {};
      resData.forEach((el) => {
        counts[el.party] = el.voteCount || 0; // Use the voteCount property from your data if available
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
      <Grid container spacing={1} style={{ marginLeft: 100, marginTop: 100, marginBottom: 100, backgroundColor:'#fff176' }}>
        {candidates.map((el) => (
          <CandidateCard key={el._id} candidate={el} party={el.party} voteData={voteData} setVoteData={setVoteData} />
        ))}
      </Grid>
    </>
  );
}
export default Zgjedhjetqendrore;