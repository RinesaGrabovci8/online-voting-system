const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

require("../models/candidate.js");
const Candidate = mongoose.model("CandidateInfo");

exports.updateCandidate = async (req, res) =>{
    try {
        const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCandidate);
      } catch (err) {
        res.status(500).json({ error: 'Could not update candidate' });
      }
}