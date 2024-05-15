const mongoose = require('mongoose');

const Team= new mongoose.Schema({
  name: { type: String, required: true }
},
{
  collection: 'Team'
});

mongoose.model('Team', Team);
