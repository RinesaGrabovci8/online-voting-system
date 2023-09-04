const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  user_id:{type: mongoose.Types.ObjectId, ref:'UserInfo'},
  election_id: { type: mongoose.Types.ObjectId, ref: 'Elections' },
  party_id: { type: mongoose.Types.ObjectId, ref: 'Parties' },
  candidate_id: { type: mongoose.Types.ObjectId, ref: 'CandidateInfo' },
},
{
  collection: "Votes"
});

mongoose.model('Votes', voteSchema);

module.exports = mongoose.model('Votes', voteSchema);
