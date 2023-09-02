const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

require("../models/candidate.js");
const Candidate = mongoose.model("CandidateInfo");

// exports.uploadImage = async (req, res) =>{
//   const {base64} = req.body;
//   try{
//     Image.create({image: base64});
//     res.send({status:"ok"})
//   }catch(error){
//     res.send({status:"error", data: error})
//   }
// };

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
      .populate('party_id', 'name') // Populate the party name field
      .populate('election_id', 'name'); // Populate the election name field
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
    const { name, surname, party_id, election_id } = req.body;

    if (!name || !surname || !party_id || !election_id) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const image = req.file ? req.file.buffer : null;

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { name, surname, party_id, election_id, image },
      { new: true }
    );

    if (!updatedCandidate) {
      return res.status(404).json({ message: "Candidate not found" });
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
    res.send({status:"ok", data:allCandidates});

  }catch(error){
    console.log(error);
  }
}

exports.getAllCandidatesbyCitypr = async (req, res) => {
  try{ 
    const allCandidates = await Candidate.find({city:"Prishtina"});
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
    const allCandidates = await Candidate.find({city:"Mitrovic"});
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
    const allCandidates = await Candidate.find({city:"Podujev"});
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
