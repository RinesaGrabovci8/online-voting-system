import React, { useState } from 'react';
import axios from "axios"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ShtoKandidat() {
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    party:"",
    election:"",
  });
  
  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.post("http://localhost:5000/crud/candidate", dataForm).then((res) => {
      console.log('res', res);
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
    <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
      <Typography variant="h6" gutterBottom>
        Shto Kandidate
      </Typography>
      <TextField
        label="Emri"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={dataForm.name}
        onChange={(e) => changes(e)}
      />
      <TextField
        label="Mbiemri"
        variant="outlined"
        fullWidth
        name="surname"
        margin="normal"
        value={dataForm.surname}
        onChange={(e) => changes(e)}
      />
      <TextField
        label="Partia"
        variant="outlined"
        fullWidth
        name="party"
        margin="normal"
        value={dataForm.party}
        onChange={(e) => changes(e)}
      />
      <TextField
        label="Zgjedhjet"
        variant="outlined"
        fullWidth
        name="election"
        margin="normal"
        value={dataForm.election}
        onChange={(e) => changes(e)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        style={{ marginTop: '16px' }}
        >
           Shto 
        </Button>
    </Box>
  );
}
