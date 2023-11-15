const mongoose = require('mongoose');

const ndertesa = new mongoose.Schema({
  name: { type: String, required: true },
  date: {type: Date, required: true}
},
{
  collection:"Ndertesa"
});

mongoose.model('Ndertesa', ndertesa);