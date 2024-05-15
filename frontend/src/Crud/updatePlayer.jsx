  import axios from "axios"
  import TextField from '@mui/material/TextField';
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import { useNavigate } from 'react-router-dom';
  import { useParams } from 'react-router-dom';
  import Header from '../Components/Header';
  import Sidebar from '../Components/Sidebar';
  import Footer from '../Components/Footer';
  import { useEffect, useState } from "react";
  
  
  export default function UpdatePlayer() {
    const { id } = useParams();
    console.log('ID:', id);
    const [dataForm, setDataForm] = useState({
      name: "",
      birthyear: "",
      number:"",
      team:"",
    });
  
    const [team, setteam] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => { 
      axios.get("http://localhost:5001/crudtest/getAllTeam")
        .then((res) => {
          setteam(res.data.data);
        })
        .catch((error) => {
          console.error('Error fetching parties data:', error);
        });
    }, []);

    const changes = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }
  
    
    const handleButtonClick = () => {
      console.log('Button Clicked');
      axios.put(`http://localhost:5001/crudtest/updatePlayerById/${id}`, dataForm) // Use the id from useParams
        .then((res) => {
          console.log('res', res);
          navigate('/admin-page'); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    console.log('dataForm', dataForm);
  
    return (
      <>
      <Header/>
      <Sidebar/>
      <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
        <Typography variant="h6" gutterBottom>
          Perditeso Player
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
          label="Lifti"
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
             Perditeso
          </Button>
      </Box>
      <Footer/>
      </>
    );
  }
  