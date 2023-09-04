const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/Vote");
const Votes = mongoose.model("Votes");

exports.voter = async (req, res) =>{
  try {
    // Extract the required data from the request body
    const { user_id, election_id, party_id, candidate_id } = req.body;

    // Create a new vote using the Votes model
    const newVote = new Votes({
      user_id,
      election_id,
      party_id,
      candidate_id,
    });

    // Save the vote to the database
    await newVote.save();

    // Respond with a success message
    res.status(201).json({ message: "Vote submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}