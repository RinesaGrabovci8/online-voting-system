const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/candidate.js");
require("../models/party.js");
const Candidate = mongoose.model("CandidateInfo");
const Party = mongoose.model("Parties");

exports.createCandidate = async (req, res) => {
  try {
    const { name, surname, party, election, city } = req.body;
    

    if (!name || !surname || !party || !election ) {
      return res.status(400).send({ error: "All fields are required." });
    }
    if(election === "Lokale"){
      if((!city)){
        return res.status(400).send({ error: "All fields are required." });
      }
    }

    const newCandidate = await Candidate.create({ name, surname, party, election, city});
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find()
      .populate('party_id', 'name') 
      .populate('election_id', 'name'); 
      console.log("candidates", candidates);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCandidateById = async (req, res) => {
  try {
    const candidateId = req.params.id;
    const { name, surname, party, election, city } = req.body;

    if (!name || !surname || !party || !election) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (election === 'Lokale' && !city) {
      return res.status(400).json({ error: 'City field is required for Lokale elections.' });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      candidateId,
      { name, surname, party, election, city },
      { new: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ error: 'Candidate not found.' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCandidates = async (req, res) => {
  try{ 
    
    const allCandidates = await Candidate.find({});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyElection = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({election:"Qendrore"});
    const party = await Party.find();
    res.send({status:"ok 1", data: allCandidates, party: party});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitypr = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Prishtine"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCityskdr = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Skenderaj"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCityfr = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Ferizaj"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitymtrv = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Mitrovice"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitygjk = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Gjakove"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitygjl = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Gjilan"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitypd = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Podujeve"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitypej = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Peje"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCityprz = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Prizren"});
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.deleteCandidateById = async (req, res) =>{
  try {
    const candidateId = req.params.id;

    await Candidate.findByIdAndRemove(candidateId);

    res.status(200).json({ status: 'ok', message: 'Candidate deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
