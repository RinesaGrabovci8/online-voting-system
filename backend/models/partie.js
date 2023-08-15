const mongoose = require('mongoose');

const partie = new mongoose.Schema({
  id: Number, 
  name: { type: String, required: true },
});

module.exports = mongoose.model('Party', partie);
module.exports = partie;