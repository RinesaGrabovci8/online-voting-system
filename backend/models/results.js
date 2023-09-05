const mongoose = require('mongoose');
const Party = require('./party.js');
const Election = require('./election.js');

const results = new mongoose.Schema({ 
  party: { type: mongoose.Schema.Types.ObjectId, ref: 'Parties', required: true },
  election: { type: mongoose.Schema.Types.ObjectId, ref: 'Elections', required: true },
  votes: { type: Number, default: 0 },
},
{
  collection:"Results"
});

mongoose.model('Results', results);