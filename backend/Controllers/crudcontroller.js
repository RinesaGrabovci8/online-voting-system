const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/planet.js");
const Planet = mongoose.model("Planeti");

require("../models/satelite.js"); 
const Satellite = mongoose.model("Satellite");

exports.createsatelite = async (req, res) => {
  try {
    const { name, isDeleted, planet_id  } = req.body;

    if (!name ||!planet_id) {
      return res.status(400).send({ error: "Name, and planet_id are required fields." });
    }

    const newsatelite = await Satellite.create({ name, isDeleted, planet_id }); 
    res.status(201).json(newsatelite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getsatellite = async (req, res) => {
  try {
    const satellite = await Satellite.find();
    res.status(200).json(satellite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStelliteById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid Satellite ID' });
  }

  try {
    const satellite = await Satellite.findById(id);

    if (!satellite) {
      return res.status(404).json({ status: 'error', message: 'Satellite not found' });
    }

    res.status(200).json({ status: 'ok', data: ndertesa });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updateSatelliteById = async (req, res) => {
  try {
    const satelliteId = req.params.id;
    const { name, isDeleted, planet_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedSatellite = await Satellite.findByIdAndUpdate(
      satelliteId,
      { name, isDeleted, planet_id },
      { new: true }
    );

    if (!updatedSatellite) {
      return res.status(404).json({ error: 'Ndertesa not found.' });
    }

    res.status(200).json(updatedSatellite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSatelliteById = async (req, res) => {
    try {
      const satelliteId = req.params.id;
  
      await Satellite.findByIdAndRemove(satelliteId);
  
      res.status(200).json({ status: 'ok', message: 'Ndertesa deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

exports.getAllSatellites = async (req, res) => {
  try{ 
    const all = await Satellite.find({});
    res.send({status:"ok", data:all});
  }catch(error){
    console.log(error);
  }
}

exports.createPlanet = async (req, res) => {
  try {
    const { name, type, isDeleted  } = req.body;

    if (!name || !type) {
      return res.status(400).send({ error: "Planet name is required." });
    }

    const newPlanet = await Planet.create({ name, type }); 
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlanet = async (req, res) => {
  try {
    const planet = await Planet.find();
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlanetById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid party ID' });
  }

  try {
    const planet = await Planet.findById(id);

    if (!planet) {
      return res.status(404).json({ status: 'error', message: 'Lifti not found' });
    }

    res.status(200).json({ status: 'ok', data: planet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updatePlanetById = async (req, res) => {
  try {
    const planetId = req.params.id;
    const { name, type, isDeleted } = req.body;

    if (!name || !type) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedPlanet = await Planet.findByIdAndUpdate(
      planetId,
      { name, isDeleted,  },
      { new: true }
    );

    if (!updatedLifti) {
      return res.status(404).json({ error: 'Lifti not found.' });
    }

    res.status(200).json(updatedPlanet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlanetById = async (req, res) => {
    try {
      const planetId = req.params.id;
  
      await Planet.findByIdAndRemove(planetId);
  
      res.status(200).json({ status: 'ok', message: 'Lifti deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

exports.getAllPlanet = async (req, res) => {
  try{ 
    
    const allPlanet = await Planet.find({});
    res.send({status:"ok", data:allPlanet});

  }catch(error){
    console.log(error);
  }
}
