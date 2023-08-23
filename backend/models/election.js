const mongoose = require('mongoose');

const election = new mongoose.Schema({
  type: { type: String, required: true },
},
{
  collection:"Elections"
});

mongoose.model('Elections', election);
