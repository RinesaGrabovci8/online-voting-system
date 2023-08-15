const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(express.json()); // Enable JSON body parsing

// Sample route to fetch candidates
app.get('/candidates', (req, res) => {
  // Fetch candidates from the database and send them as a response
  res.send('List of candidates'); // Replace with actual data or response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
