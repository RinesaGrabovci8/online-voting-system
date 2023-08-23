const mongoose = require('mongoose');

const parties = new mongoose.Schema({
  name: { type: String, required: true },
},
{
  collection:"Parties"
});

mongoose.model('Parties', parties);
