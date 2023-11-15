import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function ShtoNdertesa() {
  const [dataForm, setDataForm] = useState({
    name: "",
    date:""
  });

  const navigate =  useNavigate();

  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.post("http://localhost:5000/crudtest/createndertesa", dataForm).then((res) => {
      console.log('res', res);
      navigate('/admin-page');
    })
  };

  console.log('dataForm', dataForm);

  const handleChangeDate = (date) => {
    setDataForm({ ...dataForm, date });
  };


  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  return (
    <Box border={1} p={3} maxWidth={400} style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}>
    <Typography variant="h6" gutterBottom>
      Shto Ndertesa
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Data"
        variant="outlined"
        fullWidth
        name='date'
        margin="normal"
        value={dataForm.date}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
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
