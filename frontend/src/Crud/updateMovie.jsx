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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Updatemovie() {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    name: "",
    title: "",
    year: "",
    director: ""
  });

  const navigate = useNavigate();
  const [director, setdirector] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:5001/crudtest/getmovie/${id}`)
      .then((res) => {
        const movie = res.data.data; // Adjust based on your API response structure
        setDataForm(movie);
      })
      .catch((error) => {
        console.error('Error fetching party data:', error);
      });

    axios
      .get('http://localhost:5001/crudtest/getAlldirector')
      .then((res) => {
        setdirector(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching parties data:', error);
      });
  }, [id]);

  console.log(dataForm);
  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5001/crudtest/updatemovieById/${id}`, dataForm)
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
      <Header />
      <Sidebar />
      <Box border={1} p={3} maxWidth={400} style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}>
        <Typography variant="h6" gutterBottom>
          Perditeso movie
        </Typography>
        <TextField
          label="Emri"
          variant="outlined"
          fullWidth
          name='name'
          margin="normal"
          value={dataForm.name || ''}
          onChange={(e) => changes(e)}
        />
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          name='title'
          margin="normal"
          value={dataForm.title || ''}
          onChange={(e) => changes(e)}
        />
        <TextField
          label="Birthyear"
          variant="outlined"
          fullWidth
          name='year'
          margin="normal"
          value={dataForm.year || ''}
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
          Perditeso
        </Button>
      </Box>
      <Footer />
    </>
  );
}
