const mongoose = require('mongoose');
const party = require('./partie.js');
const election = require('./election.js');

const candidate = new mongoose.Schema({
  id: Number, 
  name: { type: String, required: true },
  surname: { type: String, required: true },
  party_id: { type: mongoose.Types.ObjectId, required:true, ref: 'Party' },
  election_id: { type: mongoose.Types.ObjectId, required:true, ref: 'Election' },
});

module.exports = mongoose.model('Candidate', candidate);
module.exports = candidate;
