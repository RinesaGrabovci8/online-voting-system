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

export default function Shtomovie() {
  const [dataForm, setDataForm] = useState({
    name: '',
    year: '',
    title:"",
    director: ''
  });

  const [director, setdirector] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5001/crudtest/getAlldirector')
      .then((res) => {
        setdirector(res.data.data);
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
      .post('http://localhost:5001/crudtest/createmovie', dataForm)
      .then((res) => {
        console.log('res', res);

        navigate('/admin-page');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


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
          Shto movie
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
          label="Titulli"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={dataForm.title}
          onChange={(e) => changes(e)}
        />
        <TextField
          label="Release year"
          variant="outlined"
          fullWidth
          name="year"
          margin="normal"
          value={dataForm.year}
          onChange={(e) => changes(e)}
        />
        <Select
          label="director"
          variant="outlined"
          fullWidth
          name="director"
          margin="normal"
          value={dataForm.director}
          onChange={(e) => changes(e)}
        >
          {director.map((director) => (
            <MenuItem key={director._id} value={director.name}>
              {director.name}
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
