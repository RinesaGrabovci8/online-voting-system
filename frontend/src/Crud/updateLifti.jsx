import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateLifti({ liftiId }) {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    name: ""
  });

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5000/crudtest//updatelifti/${id}`, dataForm) 
      .then((res) => {
        console.log('res', res);
        navigate('/admin-page'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('dataForm', dataForm);
  
  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  return (
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
  );
}
