const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/election.js");
const Election = mongoose.model("Elections");

require("../models/candidate.js");
const Candidate = mongoose.model("CandidateInfo");

exports.createElection = async (req, res) => {
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
};

exports.getElections =  async (req, res) => {
  try {
    const elections = await Election.find();
    res.status(200).json(elections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getElectionsById = async (req, res) => {
  try {
    const election = req.params.id;
    
    if (!election) {
      return res.status(404).json({ message: "Election not found" });
    }
    res.status(200).json(election);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateElectionById = async (req, res) => {
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
};

exports.deleteElectionById = async (req, res) => {
  try {
    const deletedElection = await Election.findByIdAndDelete(req.params.id);
    if (!deletedElection) {
      return res.status(404).json({ message: "Election not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCentralElection = async (req, res) => {
  const qendroreId = '64f6ff89cbd0b906d3de88b8'; 
  res.json({ id: qendroreId });
};

exports.getLocalElection = async (req, res) => {
  const lokaleId = '64f6ff99cbd0b906d3de88ba'; 
  res.json({ id: lokaleId });
};