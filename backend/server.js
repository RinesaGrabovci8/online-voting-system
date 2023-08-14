const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const users = []; // Temporary storage for registered users
const candidates = []; // Temporary storage for candidate information

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Online Voting System API');
});

// User Registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// User Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful', user });
});

// Fetch Candidate Information
app.get('/candidates', (req, res) => {
  res.json({ candidates });
});

// Add New Candidate
app.post('/candidates', (req, res) => {
  const { name, surname, imageSrc, description } = req.body;
  const candidate = { name, surname, imageSrc, description };
  candidates.push(candidate);
  res.status(201).json({ message: 'Candidate added successfully', candidate });
});

// Voting
app.post('/vote', (req, res) => {
  const { candidateId } = req.body;
  const candidate = candidates.find(candidate => candidate.id === candidateId);
  if (!candidate) {
    return res.status(404).json({ error: 'Candidate not found' });
  }
  // Implement voting logic, update candidate's vote count, and handle user's vote
  res.json({ message: 'Vote recorded successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
