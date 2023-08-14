const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
