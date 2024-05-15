import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

export default function ShtoPlayer() {
  const [dataForm, setDataForm] = useState({
    name: '',
    number: '',
    birthyear: '',
    team: ''
  });

  const [team, setteam] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5001/crudtest/getAllTeams')
      .then((res) => {
        setteam(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching parties data:', error);
      });
  }, []);

  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };


  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios
      .post('http://localhost:5001/crudtest/createPlayer', dataForm)
      .then((res) => {
        console.log('res', res);
        console.log('dataForm before POST:', dataForm);

        navigate('/admin-page');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('dataForm', dataForm);

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        border={1}
        p={3}
        maxWidth={400}
        style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}
      >
        <Typography variant="h6" gutterBottom>
          Shto Player
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
          label="Number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="number"
          value={dataForm.number}
          onChange={(e) => changes(e)}
        />
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          name="birthyear"
          margin="normal"
          value={dataForm.birthyear}
          onChange={(e) => changes(e)}
        />
        <Select
          label="Team"
          variant="outlined"
          fullWidth
          name="team"
          margin="normal"
          value={dataForm.team}
          onChange={(e) => changes(e)}
        >
          {team.map((team) => (
            <MenuItem key={team._id} value={team.name}>
              {team.name}
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
      <Footer />
    </>
  );
}
