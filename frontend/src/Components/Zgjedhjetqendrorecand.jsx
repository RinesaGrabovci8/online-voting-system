import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../CSS/zgjedhjet.css';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
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
      description: 'Kandidati i Vetvendosjes per Kryeminister te Republikes se Kosoves',
    },
    {
        id:2,
        name: "Albin",
        surname: "Kurti",
        description: "Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves.",
    },
    {
        id: 3,
        name: "Albin",
        surname: "Kurti",
        description: "Kandidat i Vetvendosjes per Kryeminister te Republikes se Kosoves.",
    },
    // Add more candidate data here...
];

  
function CandidateCard({candidate}) {
  const [data, setData] = useState()


    useEffect(() => {
      axios.get("http://localhost:5000/crud/candidate").then((response) => {
        console.log(response);
        setData(response.data)
      })
    }, []);
    return (
          <Card sx={{ maxWidth: 300 }} className='candidatewrapper'>
              <CardActionArea>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {`${candidate.name} ${candidate.surname}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${candidate.description}`}
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

// function Zgjedhjetqendrorepr() {
//   return (
//       <Grid container spacing={1} style={{marginLeft:150, marginTop:100, marginBottom:100}}>
//         {data?.map((candidate) => (
//           <CandidateCard key={candidate?.id} candidate={candidate} />
//         ))}
//       </Grid>
   
//   )
// }

function Zgjedhjetqendrorecand() {
  return (
      <Grid container spacing={1} style={{marginLeft:150, marginTop:100, marginBottom:100}}>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </Grid>
   
  )
}

export default Zgjedhjetqendrorecand