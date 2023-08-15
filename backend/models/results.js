const mongoose = require('mongoose');
const Party = require('./partie.js');
const Election = require('./election.js');

const results = new mongoose.Schema({
  id: Number, 
  election_id: { type: mongoose.Types.ObjectId, ref: 'Election' },
  party_id: { type: mongoose.Types.ObjectId, ref: 'Party' },
  votes: Number,
});

module.exports = mongoose.model('Result', results);
module.exports = results;