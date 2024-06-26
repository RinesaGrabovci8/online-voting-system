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

exports.localvoter = async (req, res) => {
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

    if (election_id === 'Lokale') {
      user.hasVotedLocal = true;
    } else if (election_id === 'Qendrore') {
      user.hasVotedCentral = true;
    }

    await user.save();

    res.status(201).json({ updatedCandidate, hasVotedLocal: user.hasVotedLocal });
  } catch (error) {
    console.error('Error processing vote:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesPr = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Prishtine' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesPrz = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Prizren' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesPej = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Peje' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesMtrv = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Mitrovice' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesGjk = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Gjakove' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesSkdr = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Skenderaj' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesFr = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Ferizaj' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesGjl = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Gjilan' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLokaleCandidatesPd = async (req, res) => {
  try {
    const candidates = await Candidate.find({ election: 'Lokale', city: 'Podujeve' }, 'party votes');

    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for "Lokale" elections' });
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};