import axios from "axios"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { useEffect, useState } from "react";


export default function Updatedirector() {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    name: "",
    birthyear: ""
  });

  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`http://localhost:5001/crudtest/getdirector/${id}`)
      .then((res) => {
        const director = res.data; // Adjust based on your API response structure
        setDataForm(director);
      })
      .catch((error) => {
        console.error('Error fetching party data:', error);
      });
  }, [id]);

  const changes = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }


  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5001/crudtest/updatedirectorById/${id}`, dataForm) // Use the id from useParams
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
      <Box border={1} p={3} maxWidth={400} style={{ marginTop: 100, marginLeft: 650, marginBottom: 50 }}>
        <Typography variant="h6" gutterBottom>
          Perditeso director
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
          type="date"
          variant="outlined"
          fullWidth
          name="birthyear"
          margin="normal"
          value={dataForm.birthyear }
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
      <Footer />
    </>
  );
}
