import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
export default function UpdateParti() {
  const [textInput, setTextInput] = React.useState('');
  
  const handleButtonClick = () => {
    console.log('Button Clicked');
  };

  return (
    <Box border={1} p={3} maxWidth={400} style={{marginTop: 100, marginLeft: 650, marginBottom:50}}>
      <Typography variant="h6" gutterBottom>
        Perditeso Parti
      </Typography>
      <TextField
        label="Emri"
        variant="outlined"
        fullWidth
        margin="normal"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
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
  );
}
