const mongoose = require('mongoose');
const Party = require('./party.js');
const Election = require('./election.js');

const results = new mongoose.Schema({ 
  election_id: { type: mongoose.Types.ObjectId, ref: 'Election' },
  party_id: { type: mongoose.Types.ObjectId, ref: 'Party' },
  votes: Number,
},
{
  collection:"Result"
});

mongoose.model('Result', results);