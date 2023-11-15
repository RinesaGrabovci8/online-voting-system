import React, { useState, useEffect } from 'react';
import axios from "axios"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function ShtoLifti() {
  const [dataForm, setDataForm] = useState({
    name: "",
    ndertesa:""
  });

  const [ndertesa, setndertesa] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get("http://localhost:5000/crudtest/getndertesa")
      .then((res) => {
        setndertesa(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching parties data:', error);
      });
  }, []);

  
  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.post("http://localhost:5000/crudtest/createlifti", dataForm).then((res) => {
      console.log('res', res);
      navigate('/admin-page'); 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  console.log('dataForm', dataForm);

  const changes = (e) => {
    const { name, ndertesa } = e.target;
  }

  return (
    <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
      <Typography variant="h6" gutterBottom>
        Shto Lift
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
      <Select
        label="Ndertesa"
        variant="outlined"
        fullWidth
        name="ndertesa"
        margin="normal"
        value={dataForm.ndertesa}
        onChange={(e) => changes(e)}
      >
         {ndertesa.map((ndertesa) => (
          <MenuItem key={ndertesa._id} value={ndertesa.name}>
            {ndertesa.name}
          </MenuItem>
        ))}  
      </Select>
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
