const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/candidate.js");
const Candidate = mongoose.model("CandidateInfo");

// exports.uploadImage = async (req, res) =>{
//   const {base64} = req.body;
//   try{
//     Image.create({image: base64});
//     res.send({status:"ok"})
//   }catch(error){
//     res.send({status:"error", data: error})
//   }
// };

exports.createCandidate = async (req, res) => {
  try {
    const { name, surname, party, election } = req.body;
    

    if (!name || !surname || !party || !election ) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const newCandidate = await Candidate.create({ name, surname, party, election});
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find()
      .populate('party_id', 'name') // Populate the party name field
      .populate('election_id', 'name'); // Populate the election name field
      console.log("candidates", candidates);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCandidateById = async (req, res) => {
  try {
    const { name, surname, party_id, election_id } = req.body;

    if (!name || !surname || !party_id || !election_id) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const image = req.file ? req.file.buffer : null;

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { name, surname, party_id, election_id, image },
      { new: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCandidateById = async (req, res) => {
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!deletedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

