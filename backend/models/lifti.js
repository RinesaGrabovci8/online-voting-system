const mongoose = require('mongoose');

const lifti = new mongoose.Schema({
  name: { type: String, required: true },
  ndertesa: {type: String, required: true}
},
{
  collection:"Lifti"
});

mongoose.model('Lifti', lifti);