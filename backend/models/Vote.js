const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'CandidateInfo', required: true },
  election: { type: mongoose.Schema.Types.ObjectId, ref: 'Elections', required: true },
  party: { type: mongoose.Schema.Types.ObjectId, ref: 'Parties', required: true },
},
{
  collection: "Votes"
});

mongoose.model('Votes', voteSchema);

module.exports = mongoose.model('Votes', voteSchema);
