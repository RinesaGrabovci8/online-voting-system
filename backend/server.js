const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies
};
app.use(cors(corsOptions));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error } = require('console');

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{console.log("Connected to Database");})
.catch(e => console.log(e));

const authRoutes = require('./Routes/authRouter');
const userRoutes = require('./Routes/userRouter');
const electionRoutes = require('./Routes/electionRouter');
app.use('/auth', authRoutes);
app.use('/auth', userRoutes);
app.use('/crud', electionRoutes);


app.listen(5000, () => {
  console.log("server started");
})

