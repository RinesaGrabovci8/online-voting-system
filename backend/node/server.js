// server.js
const express = require('express');
const app = express();
const PORT = 5000; // Choose any port you prefer

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js
// ...

// User registration route
app.post('/api/register', (req, res) => {
    // Process user registration logic here
    const { username, email, password } = req.body;
    // Code to register the user and save data to the database (if used)
  
    res.json({ success: true, message: 'User registered successfully!' });
  });
  