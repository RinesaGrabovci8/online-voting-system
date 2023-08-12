const mongoose = require('mongoose');

const elections = new mongoose.Schema({
  id: Number, 
  type: { type: String, required: true },
});

module.exports = mongoose.model('Election', elections);
