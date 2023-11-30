const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/vote");
const Votes = mongoose.model("Votes");

require("../models/candidate"); 
const Candidate = mongoose.model("CandidateInfo");

require("../models/user");
const User = mongoose.model("UserInfo");


exports.voter = async (req, res) => {
  try {
    const userId = req.params.id;
    const { election_id, party_id, candidate_id } = req.body;

    console.log("Received Request Body:", req.body);
    console.log("userId:", userId);
    console.log("election_id:", election_id);
    console.log("party_id:", party_id);
    console.log("candidate_id:", candidate_id);

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(candidate_id, { $inc: { votes: 1 } }, { new: true });

    if (!updatedCandidate) {
      return res.status(500).json({ error: 'Error updating candidate votes' });
    }

    const newVote = new Votes({
      userId: userId,
      election: election_id,
      party: party_id,
      candidate: candidate_id,
    });

    await newVote.save();
  
    res.status(201).json({ updatedCandidate });
  } catch (error) {
    console.error('Error processing vote:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getQendroreCandidatesVotes = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Qendrore' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Qendrore" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



