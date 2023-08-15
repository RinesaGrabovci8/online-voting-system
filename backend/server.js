const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();

const DB_URI = 'mongodb://localhost:27017/Users';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Database connection error:', error);
});

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
