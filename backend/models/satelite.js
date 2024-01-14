const mongoose = require('mongoose');

const satellite= new mongoose.Schema({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false},
  planet_id: {type: String, required:true}
},
{
  collection: 'Satellite'
});

mongoose.model('Satellite', satellite);
