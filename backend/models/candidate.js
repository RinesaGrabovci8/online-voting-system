const mongoose = require('mongoose');
const party = require('./party.js');
const election = require('./election.js');

const candidate = new mongoose.Schema({ 
  name: { type: String, required: true },
  surname: { type: String, required: true },
  party_id: { type: mongoose.Types.ObjectId, required:true, ref: 'Party' },
  election_id: { type: mongoose.Types.ObjectId, required:true, ref: 'Elections' },
},
{
  collection:"CandidateInfo"
}
);

mongoose.model('CandidateInfo', candidate);

