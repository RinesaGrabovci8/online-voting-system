const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{console.log("Connected to Database");})
.catch(e => console.log(e));

const authRoutes = require('./Routes/authRouter');
const userRoutes = require('./Routes/userRouter');
const electionRoutes = require('./Routes/electionRouter');
const partyRoutes = require("./Routes/partyRouter");
const candidateRoutes = require("./Routes/candidaterouter");
const votersRouter = require("./Routes/votersRouter");
const crudtest = require('./Routes/crudroutes');

app.use('/auth', authRoutes);
app.use('/auth', userRoutes);
app.use('/crud', electionRoutes);
app.use('/crud', partyRoutes);
app.use('/crud', candidateRoutes);
app.use('/vote', votersRouter);
app.use('/crudtest', crudtest)


app.listen(5001, () => {
  console.log("server started");
})

