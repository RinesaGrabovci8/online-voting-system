import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function ShtoParti() {
  const [dataForm, setDataForm] = useState({
    name: "",
  });

  const navigate =  useNavigate();

  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.post("http://localhost:5001/crud/party", dataForm).then((res) => {
      console.log('res', res);
      navigate('/admin-page');
    })
  };

  console.log('dataForm', dataForm);

  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  return (
    <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
      <Typography variant="h6" gutterBottom>
        Shto Parti
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
           Shto 
        </Button>
    </Box>
  );
}
