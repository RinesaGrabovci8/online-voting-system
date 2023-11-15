const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/ndertesa.js");
const Ndertesa = mongoose.model("Ndertesa");

require("../models/lifti.js");
const Lifti = mongoose.model("Lifti");

exports.createNdertesa = async (req, res) => {
  try {
    const { name, date } = req.body;

    if (!type || !date) {
      return res.status(400).send({ error: "Ndertesa name and date is required." });
    }

    const newNdertesa = await Ndertesa.create({ name, date });
    res.status(201).json(newNdertesa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNdertesat =  async (req, res) => {
    try {
      const ndertesa = await Ndertesa.find();
      res.status(200).json(ndertesa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateNdertesaById = async (req, res) => {
    try {
      const { name, date } = req.body;
  
      if (!name || !date) {
        return res.status(400).send({ error: "Ndertesa name and date is required." });
      }
  
      const updatedNdertesa = await Ndertesa.findByIdAndUpdate(
        req.params.id,
        { name, date },
        { new: true }
      );
  
      if (!updatedNdertesa) {
        return res.status(404).json({ message: "Election not found" });
      }
  
      res.status(200).json(updatedNdertesa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.deleteNdertesaById = async (req, res) => {
    try {
      const deletedNdertesa = await Ndertesa.findByIdAndDelete(req.params.id);
      if (!deletedNdertesa) {
        return res.status(404).json({ message: "Ndertesa not found" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createLifti = async (req, res) => {
    try {
      const { name, ndertesa } = req.body;
  
      if (!ndertesa || !name) {
        return res.status(400).send({ error: "Lifti name and ndertesa is required." });
      }
  
      const newLifti = await Ndertesa.create({ name, ndertesa });
      res.status(201).json(newLifti);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getLiftet =  async (req, res) => {
    try {
      const lifti = await Lifti.find();
      res.status(200).json(lifti);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateLiftiById = async (req, res) => {
    try {
      const { name, ndertesa } = req.body;
  
      if (!name || !ndertesa) {
        return res.status(400).send({ error: "Lifti name and ndertesa is required." });
      }
  
      const updatedLifti = await Lifti.findByIdAndUpdate(
        req.params.id,
        { name, ndertesa},
        { new: true }
      );
  
      if (!updatedLifti) {
        return res.status(404).json({ message: "Election not found" });
      }
  
      res.status(200).json(updatedLifti);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.deleteLiftiById = async (req, res) => {
    try {
      const deletedLifti = await Lifti.findByIdAndDelete(req.params.id);
      if (!deletedLifti) {
        return res.status(404).json({ message: "Lifti not found" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};