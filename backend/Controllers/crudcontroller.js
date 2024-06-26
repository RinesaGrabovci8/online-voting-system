const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/Director.js");
const Director = mongoose.model("director");

require("../models/Movie.js");
const Movie = mongoose.model("movie");

exports.createmovie = async (req, res) => {
  try {
    const { name, director,year,title } = req.body;

    if (!name || !director ||!year||!title ) {
      return res.status(400).send({ error: "movie name is required." });
    }

    const newmovie = await Movie.create({ name, director,year,title  });
    res.status(201).json(newmovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getmovieById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid movie ID' });
  }

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ status: 'error', message: 'movie not found' });
    }

    res.status(200).json({ status: 'ok', data: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updatemovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { name, director,year,title  } = req.body;

    if (!name || !director ||!year||!title) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedmovie = await Movie.findByIdAndUpdate(
      movieId,
      { name , director,year,title  },
      { new: true }
    );

    if (!updatedmovie) {
      return res.status(404).json({ error: 'movie not found.' });
    }

    res.status(200).json(updatedmovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletemovieById = async (req, res) => {
  try {
    const movieId = req.params.id;

    await Movie.findByIdAndRemove(movieId);

    res.status(200).json({ status: 'ok', message: 'director deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getAllmovie = async (req, res) => {
  try {

    const allmovie = await Movie.find({});
    res.send({ status: "ok", data: allmovie });

  } catch (error) {
    console.log(error);
  }
}

exports.createdirector = async (req, res) => {
  try {
    const { name, birthyear } = req.body;


    if (!name || !birthyear  ) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const newdirector = await Director.create({ name, birthyear });
    res.status(201).json(newdirector);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getdirectorById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid director ID' });
  }

  try {
    const director = await Director.findById(id);

    if (!director) {
      return res.status(404).json({ status: 'error', message: 'director not found' });
    }

    res.status(200).json({ status: 'ok', data: director });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getdirector = async (req, res) => {
  try {
    const director = await Director.find()
      .populate('director_id', 'name')
    console.log("directors", director);
    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getdirectorById = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) {
      return res.status(404).json({ message: "director not found" });
    }
    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatedirectorById = async (req, res) => {
  try {
    const directorId = req.params.id;
    const { name, birthyear } = req.body;

    if (!name || !birthyear ) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updateddirector = await Director.findByIdAndUpdate(
      directorId,
      { name, birthyear },
      { new: true }
    );

    if (!updateddirector) {
      return res.status(404).json({ error: 'director not found.' });
    }

    res.status(200).json(updateddirector);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAlldirector = async (req, res) => {
  try {

    const alldirector = await Director.find({});
    res.send({ status: "ok", data: alldirector });

  } catch (error) {
    console.log(error);
  }
}

exports.deletedirectorById = async (req, res) => {
  try {
    const directorId = req.params.id;

    await Director.findByIdAndRemove(directorId);

    res.status(200).json({ status: 'ok', message: 'director deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};




