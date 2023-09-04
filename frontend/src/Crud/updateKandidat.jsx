import React, { useState, useEffect } from 'react';
import axios from "axios"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function UpdateKandidat() {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    party:"",
    election:"",
    city:""
  });

  const [parties, setParties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get("http://localhost:5000/crud/getAllParties")
      .then((res) => {
        setParties(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching parties data:', error);
      });
  }, []);

  
  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5000/crud/candidate/${id}`, dataForm) // Use the id from useParams
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
    const { name, value } = e.target;
    if (name === 'election' && dataForm.election === 'Lokale' && value === 'Qendrore') {
      setDataForm({ ...dataForm, [name]: value, city: '' });
    } else {
      setDataForm({ ...dataForm, [name]: value });
    }
  }

  return (
    <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
      <Typography variant="h6" gutterBottom>
        Perditeso Kandidate
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
      <Select
        label="Partia"
        variant="outlined"
        fullWidth
        name="party"
        margin="normal"
        value={dataForm.party}
        onChange={(e) => changes(e)}
      >
         {parties.map((party) => (
          <MenuItem key={party._id} value={party.name}>
            {party.name}
          </MenuItem>
        ))}  
      </Select>
      <Select
        label="Zgjedhjet"
        variant="outlined"
        fullWidth
        name="election"
        margin="normal"
        value={dataForm.election}
        onChange={(e) => changes(e)}
      >
        <MenuItem value="Qendrore">Qendrore</MenuItem>
        <MenuItem value="Lokale">Lokale</MenuItem>
      </Select>
      {dataForm.election === 'Lokale' && ( 
        <Select
          label="City"
          variant="outlined"
          fullWidth
          name="city"
          margin="normal"
          value={dataForm.city}
          onChange={(e) => changes(e)}
        >
          <MenuItem value="Prishtine">Prishtine</MenuItem>
          <MenuItem value="Podujeve">Podujeve</MenuItem>
          <MenuItem value="Mitrovice">Mitrovice</MenuItem>
          <MenuItem value="Ferizaj">Ferizaj</MenuItem>
          <MenuItem value="Skenderaj">Skenderaj</MenuItem>
          <MenuItem value="Gjakove">Gjakove</MenuItem>
          <MenuItem value="Gjilan">Gjilan</MenuItem>
          <MenuItem value="Prizren">Prizren</MenuItem>
          <MenuItem value="Peje">Peje</MenuItem>
        </Select>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        style={{ marginTop: '16px' }}
        >
           
        </Button>
    </Box>
  );
}
