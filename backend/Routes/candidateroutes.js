const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000; // Use the logical OR operator

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to Database");
}).catch(e => console.log(e));


require("../backend/models/candidate.js");
const Candidate = mongoose.model("CandidateInfo");

app.post("/candidates", async (req, res) => {
  try {
    const { name, surname, party_id, election_id } = req.body;

    if (!name || !surname || !party_id || !election_id) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const newCandidate = await Candidate.create({ name, surname, party_id, election_id });
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all candidates
app.get("/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.find()
      .populate('party_id', 'name') // Populate the party name field
      .populate('election_id', 'name'); // Populate the election name field
    
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a candidate by ID
app.get("/candidates/:id", async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a candidate by ID
app.put("/candidates/:id", async (req, res) => {
  try {
    const { name, surname, party_id, election_id } = req.body;

    if (!name || !surname || !party_id || !election_id) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { name, surname, party_id, election_id },
      { new: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a candidate by ID
app.delete("/candidates/:id", async (req, res) => {
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!deletedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
