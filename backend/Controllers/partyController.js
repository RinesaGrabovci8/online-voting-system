const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/party.js");
const Party = mongoose.model("Parties");

exports.createParty = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Party name is required." });
    }

    const newParty = await Party.create({ name }); 
    res.status(201).json(newParty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPartyById = async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);
    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(200).json(party);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePartyById = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Party name is required." });
    }

    const updatedParty = await Party.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updatedParty) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.status(200).json(updatedParty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePartyById = async (req, res) => {
  try {
    const deletedParty = await Party.findByIdAndDelete(req.params.id);
    if (!deletedParty) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
