const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/Vote");
const Votes = mongoose.model("Votes");

require("../models/party");
const Party = mongoose.model("Parties");

require("../models/user");
const User = mongoose.model("UserInfo");

require("../models/election");
const Election = mongoose.model("Elections");

exports.voter = async (req, res) =>{
  try {
    const userId = req.params.id;
    const {election_id, party_id, candidate_id } = req.body;

    console.log("Received Request Body:", req.body);
    console.log("userId", userId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const newVote = new Votes({
      userId: userId,
      election: election_id,
      party: party_id,
      candidate: candidate_id,
    });

    await newVote.save();

    res.status(201).json({ message: "Vote submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};