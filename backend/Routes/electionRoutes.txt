const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
const PORT = process.env.PORT | 5000;
const routes = require('./Routes/electionRoutes.js');
app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{console.log("Connected to Database");})
.catch(e => console.log(e));

require("../backend/models/election.js");
const Election = mongoose.model("Elections");

app.post("/elections", async (req, res) => {
  try {
    const { type } = req.body;

    if (!type) {
      return res.status(400).send({ error: "Election type is required." });
    }

    const newElection = await Election.create({ type });
    res.status(201).json(newElection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/elections", async (req, res) => {
  try {
    const elections = await Election.find();
    res.status(200).json(elections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/elections/:id", async (req, res) => {
  try {
    const election = await Election.findById(req.params.id);
    if (!election) {
      return res.status(404).json({ message: "Election not found" });
    }
    res.status(200).json(election);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/elections/:id", async (req, res) => {
  try {
    const { type } = req.body;

    if (!type) {
      return res.status(400).send({ error: "Election type is required." });
    }

    const updatedElection = await Election.findByIdAndUpdate(
      req.params.id,
      { type },
      { new: true }
    );

    if (!updatedElection) {
      return res.status(404).json({ message: "Election not found" });
    }

    res.status(200).json(updatedElection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/elections/:id", async (req, res) => {
  try {
    const deletedElection = await Election.findByIdAndDelete(req.params.id);
    if (!deletedElection) {
      return res.status(404).json({ message: "Election not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




app.listen(PORT, () =>console.log(`Listening at ${PORT}`));
