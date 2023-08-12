const mongoose = require('mongoose');

const parties = new mongoose.Schema({
  id: Number, 
  name: { type: String, required: true },
});

module.exports = mongoose.model('Party', parties);
