const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/Player.js");
const Player = mongoose.model("Player");

require("../models/Team.js");
const Team = mongoose.model("Team");

exports.createTeam = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Team name is required." });
    }

    const newTeam = await Team.create({ name });
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeams = async (req, res) => {
  try {
    const Teams = await Team.find();
    res.status(200).json(Teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeamById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid Team ID' });
  }

  try {
    const Team = await Team.findById(id);

    if (!Team) {
      return res.status(404).json({ status: 'error', message: 'Team not found' });
    }

    res.status(200).json({ status: 'ok', data: Team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updateTeamById = async (req, res) => {
  try {
    const TeamId = req.params.id;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedTeam = await Team.findByIdAndUpdate(
      TeamId,
      { name },
      { new: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTeamById = async (req, res) => {
  try {
    const TeamId = req.params.id;

    await Team.findByIdAndRemove(TeamId);

    res.status(200).json({ status: 'ok', message: 'Player deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getAllTeams = async (req, res) => {
  try {

    const allTeam = await Team.find({});
    res.send({ status: "ok", data: allTeam });

  } catch (error) {
    console.log(error);
  }
}

exports.createPlayer = async (req, res) => {
  try {
    const { name, birthyear, number, team } = req.body;


    if (!name || !number || !birthyear || !team) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const newPlayer = await Player.create({ name, number, birthyear, team });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const Players = await Player.find()
      .populate('player_id', 'name')
      .populate('team_id', 'name');
    console.log("Players", Players);
    res.status(200).json(Players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlayerById = async (req, res) => {
  try {
    const Player = await Player.findById(req.params.id);
    if (!Player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(Player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePlayerById = async (req, res) => {
  try {
    const PlayerId = req.params.id;
    const { name, birthyear, number, team } = req.body;

    if (!name || !number || !birthyear || !team) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedPlayer = await Player.findByIdAndUpdate(
      PlayerId,
      { name, number, birthyear, team },
      { new: true }
    );

    if (!updatedPlayer) {
      return res.status(404).json({ error: 'Player not found.' });
    }

    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {

    const allPlayers = await Player.find({});
    res.send({ status: "ok", data: allPlayers });

  } catch (error) {
    console.log(error);
  }
}

exports.deletePlayerById = async (req, res) => {
  try {
    const PlayerId = req.params.id;

    await Player.findByIdAndRemove(PlayerId);

    res.status(200).json({ status: 'ok', message: 'Player deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};




