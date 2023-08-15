const mongoose = require('mongoose');

const election = new mongoose.Schema({
  id: Number, 
  type: { type: String, required: true },
});

module.exports = mongoose.model('Election', election);
module.exports = election;