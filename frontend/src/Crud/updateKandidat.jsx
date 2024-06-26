import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

export default function UpdateKandidat() {
  const { id } = useParams();
  const [dataForm, setDataForm] = useState({
    name: '',
    surname: '',
    party: '',
    election: '',
    city: ''
  });

  const [parties, setParties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch candidate data
    axios.get(`http://localhost:5001/crud/getcandidate/${id}`)
      .then((res) => {
        console.log('API response:', res);
        const candidate = res.data; // Adjust based on the actual API response structure
        if (candidate) {
          setDataForm(candidate);
        }
        console.log('Fetched candidate:', candidate);
      })
      .catch((error) => {
        console.error('Error fetching candidate data:', error);
      });

    // Fetch parties data
    axios.get('http://localhost:5001/crud/getAllParties')
      .then((res) => {
        setParties(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching parties data:', error);
      });
  }, [id]);

  const handleButtonClick = () => {
    axios.put(`http://localhost:5001/crud/candidate/${id}`, dataForm)
      .then(() => {
        navigate('/admin-page');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const changes = (e) => {
    const { name, value } = e.target;
    if (name === 'election' && dataForm.election === 'Lokale' && value === 'Qendrore') {
      setDataForm({ ...dataForm, [name]: value, city: '' });
    } else {
      setDataForm({ ...dataForm, [name]: value });
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Box border={1} p={3} maxWidth={400} style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}>
        <Typography variant="h6" gutterBottom>
          Përditëso Kandidatin
        </Typography>
        <TextField
          label="Emri"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={dataForm.name || ''}
          onChange={changes}
        />
        <TextField
          label="Mbiemri"
          variant="outlined"
          fullWidth
          name="surname"
          margin="normal"
          value={dataForm.surname || ''}
          onChange={changes}
        />
        <Select
          label="Partia"
          variant="outlined"
          fullWidth
          name="party"
          margin="normal"
          value={dataForm.party}
          onChange={changes}
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
          value={dataForm.election || ''}
          onChange={changes}
        >
          <MenuItem value="Qendrore">Qendrore</MenuItem>
          <MenuItem value="Lokale">Lokale</MenuItem>
        </Select>
        {dataForm.election === 'Lokale' && (
          <Select
            label="Qyteti"
            variant="outlined"
            fullWidth
            name="city"
            margin="normal"
            value={dataForm.city || ''}
            onChange={changes}
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
          Përditëso
        </Button>
      </Box>
      <Footer />
    </>
  );
}
