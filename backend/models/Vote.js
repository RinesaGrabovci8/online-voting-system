const mongoose = require('mongoose');
const user = require('./user.js');
const candidate = require('./candidate.js');

const vote = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId,required:true,  ref: 'User' },
  candidateId: { type: mongoose.Schema.Types.ObjectId,required:true, ref: 'Candidate' },
});

const Vote = mongoose.model('Vote', vote);

module.exports = vote;