import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

export default function UpdateParti({ partyId }) {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    name: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the party data by ID when the component mounts
    axios.get(`http://localhost:5001/crud/getParty/${id}`)
      .then((res) => {
        const party = res.data.data; // Adjust based on your API response structure
        setDataForm(party);
      })
      .catch((error) => {
        console.error('Error fetching party data:', error);
      });
  }, [id]);

  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5001/crud/updateParty/${id}`, dataForm) 
      .then((res) => {
        console.log('res', res);
        navigate('/admin-page'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  
  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  return (
    <>
    <Header/>
    <Sidebar/>
    <Box border={1} p={3} maxWidth={400} style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}>
      <Typography variant="h6" gutterBottom>
        Perditeso Partine
      </Typography>
      <TextField
         label="Emri"
         variant="outlined"
         fullWidth
         name='name'
         margin="normal"
         value={dataForm.name}
         onChange={(e) => changes(e)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        style={{ marginTop: '16px' }}
      >
        Perditeso
      </Button>
    </Box>
    <Footer/>
    </>
  );
}
